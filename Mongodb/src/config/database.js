//database.js
const mongoose = require('mongoose');

// mongoose options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// mongodb environment variables
const {
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB,
    MONGO_CLUSTER,
    MONGO_USER,
    MONGO_PASS,
} = process.env;

const dbConnectionURL = {
    //'LOCALURL': `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`
    'LOCALURL': `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_CLUSTER}/${MONGO_DB}?retryWrites=true&w=majority`
};


mongoose.connect(dbConnectionURL.LOCALURL, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb Connection Error:' + dbConnectionURL.LOCALURL));
db.once('open', () => {
     // we're connected !
     console.log('Mongodb Connection Successful');
});