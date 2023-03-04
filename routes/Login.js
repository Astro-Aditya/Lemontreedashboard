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
        const { username, password } = req.body

        const user = await User.findOne({username})

        if(!user) return res.status(400).json({msg: "User with this username does not exist."})

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({msg: "Password is incorrect."})

        const access_token = createAccessToken({id: user._id})

        // console.log(refresh_token)
        // console.log('access_token',access_token)

        // res.cookie('refreshtoken', refresh_token, {
        //     httpOnly: true,
        //     path: '/api/refresh_token',
        //     maxAge: 30*24*60*60*1000 // 30days
        // })

        res.json({
            msg: 'Login Success!',
            access_token,
            user: {
                ...user._doc,
                password: ''
            }
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})

module.exports = router
