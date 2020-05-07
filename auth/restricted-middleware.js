module.exports = (req, res, next) => {
    const { authorization } = req.headers
    const API_SECRET = process.env.API_SECRET || "banana" //api_secret is a banana word

    if (authorization === API_SECRET) {
        next()
    }else{
        res.status(403).json({you:"have no power here"})
    }

}