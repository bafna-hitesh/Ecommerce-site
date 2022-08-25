const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const { User } = require("../models/user.model")

const handleAuthVerify = async (req, res, next) => {
   try {
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, SECRET);
      
      userId = decoded.userId;
		const user = await User.findById(userId);

      if (!user) {
			res.status(401).json({ message: 'Unauthorized access' });
			return;
		}
		req.user = user;

      next();
   } catch (error) {
      res.status(401).json({
         success: false,
         message: 'You do not have permissions to view this content',
         errMessage: error.message,
      });
   }
};

module.exports = { handleAuthVerify };
