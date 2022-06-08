const mongoose = require('mongoose');

const MONGO_URL = process.env['MONGO_URI'];

const initializeDBConnection = async () => {
   try {
      const connectionStatus = await mongoose.connect(MONGO_URL);

      if (connectionStatus) {
         console.log('DB Connection Established');
      }
   } catch (error) {
      console.log('DB Connection Failed', error);
   }
};

module.exports = { initializeDBConnection };
