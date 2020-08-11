var jwt = require('jsonwebtoken');
const config=require('../helper/config')


CheckAuthentication = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];// Bearer <token>
    jwt.verify(token, config.secret, function (err, decoded) {
      if (err) {

        if (err.name === 'TokenExpiredError') {
          // create new token
          let newToken = createNewToken();
          req.headers.authorization = newToken;
        }

        else if (err.name === 'JsonWebTokenError') {

        }
      }
      next();

    });
  }
  else {
    return res.status(403).send({
      result: 'unauthorized',
      err: 'authentication error. token required.'
    });
  }
}

Login = async (data) => {
  const token = await createNewToken(data);
  return token;
}

Signup = async (data) => {
  const token = await createNewToken(data); 
  return token;
}

const createNewToken = (payload) => {
  const token = jwt.sign(payload, config.secret, { expiresIn: config.tokenLife });
  //const refreshToken = jwt.sign(payload, config.refreshTokenSecret);// it will save in db
  return  token;
}

module.exports = {
  Signup,
  Login
}