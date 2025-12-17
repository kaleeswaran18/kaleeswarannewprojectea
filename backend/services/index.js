const jwt = require('jsonwebtoken');


class HelperService {
    constructor(res) {
        this.res = res;
    }
    async isEmail(str) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
        return emailRegex.test(str);   
    }

    async isPhoneNumber(str) { 
        const phoneRegex = /^[0-9+\(\)#\.\s\/ext-]+$/;          
        return phoneRegex.test(str);  
    } 

    async decodeToken(token) {  
        try {
            return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, value) => {
                if (err) {
                    if (err.message == "invalid token") return false;
                    return {
                        status: false,
                        expiredAt: err.expiredAt,
                        data: jwt.decode(token),
                    }
                } else return { status: true, data: value['existingUser'] }
            })
        } catch (err) {
            console.log(err,"err")
        }
    }

}

module.exports = { HelperService }