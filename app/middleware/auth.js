import jwt from 'jsonwebtoken';

const privateKey= 'privateKey';

export default async (req, res, next) => {
        try {
                const token = req.headers.token.split(' ')[1];
                if(!token)
                return res.status(500).json({message:'token must be provided'});

                const decoded = await jwt.verify(token, privateKey);
                req.user = decoded.user;
                next();
        }
        catch(error){
                res.status(500).json({message: error.message})
        }
      
}