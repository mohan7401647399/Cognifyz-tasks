const User = require('../model/userModel'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcryptjs')

//  user register controller
const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    const hashedPasswords = await bcrypt.hash(password, 10)
    const user = new User({ name, email, password: hashedPasswords })
    await user.save()
    res.status(201).json({ message: 'User registered successfully' })
}

//  user login controller
const loginUser = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' })
    }
    const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
    return res.status(200).json({ message: 'User logged in successfully', token })
}

//  get all users
const getUsers = async (req, res) => {
    const users = await User.find()
    res.status(200).json({ users })
}

module.exports = {
    registerUser,
    loginUser,
    getUsers
}