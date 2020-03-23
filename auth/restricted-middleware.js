// -- imports
const bcrypt = require("bcryptjs");
const database = require("./auth-model");


const authenticateUserOld = (req, res, next) => {

    if (!req.headers || !req.headers.username || !req.headers.password)
    { res.status(400).json({message: "Username and password are both required."})}

    else
    {
        // see if user exists
        database.getUserByUsername(req.headers.username)
        .then(databaseInfo => {
            if (databaseInfo && bcrypt.compareSync(req.headers.password, databaseInfo.password))
                { next(); }
            else
                { res.status(401).json({ message: "Invalid Credentials."})}
        })
        .catch(error => { res.status(401).json({ message: "You shall not pass."})})
    }
}

const authenticateUser = (req, res, next) => {

    if (!req.headers || !req.headers.username || !req.headers.password)
    { res.status(400).json({message: "Username and password are both required."})}

    else
    {
        // see if user exists
        database.getUserByUsername(req.headers.username)
        .then(databaseInfo => {
            if (databaseInfo && bcrypt.compareSync(req.headers.password, databaseInfo.password))
                { next(); }
            else
                { res.status(401).json({ message: "Invalid Credentials."})}
        })
        .catch(error => { res.status(401).json({ message: "You shall not pass."})})
    }
}

module.exports = authenticateUser;