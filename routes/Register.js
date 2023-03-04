const express = require('express'); 

const User = require('../models/User');
const router = express.Router()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}

router.post('/', async(req, res) => {
    try {
        const { name, username, email, password} = req.body
        let newUserName = username.toLowerCase().replace(/ /g, '')

        const user_name = await User.findOne({username: newUserName})
        if(user_name) return res.status(400).json({msg: "This user name already exists."})

        const user_email = await User.findOne({email})
        if(user_email && email !== '') return res.status(400).json({msg: "This email already exists."})

        if(password?.length < 6)
        return res.status(400).json({msg: "Password must be at least 6 characters."})

        let newUser

        const passwordHash = await bcrypt.hash(password, 12)

        newUser = new User({
            name, username: newUserName, email, password: passwordHash
        })

        const access_token = createAccessToken({id: newUser._id})
        // const refresh_token = createRefreshToken({id: newUser._id})
        
        // res.cookie('refreshtoken', refresh_token, {
        //     httpOnly: true,
        //     path: '/api/refresh_token',
        //     maxAge: 30*24*60*60*1000 // 30days
        // })

        await newUser.save()

        res.json({
            msg: 'Register Success!',
            access_token,
            user: {
                ...newUser._doc,
                password: ''
            }
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})

module.exports = router
