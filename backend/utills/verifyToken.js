const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // console.log(req,"tokeee")

    let token = req.headers["authorization"];

    if (!token)
        return res.status(403).json({
            status: false,
            msg: "Token is required for authentication"
        })

    token = token.split(" ")[1]
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    }
    catch (err) {
        console.log(err, 'err')
        return res.status(400).json({
            status: false,
            msg: "Token not valid"
        })
    }
};


module.exports = verifyToken