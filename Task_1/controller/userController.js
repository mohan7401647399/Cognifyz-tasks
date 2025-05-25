//  get request
const getUsers = (req, res) => {
    res.render('index', { userData: null })
}

//  post request
const submitData = (req, res) => {
    const userData = req.body
    res.render('index', { userData })
}

module.exports = {
    getUsers,
    submitData
}