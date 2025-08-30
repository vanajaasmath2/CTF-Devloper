const monogoose = require('mongoose');


const connectDB = async () => {
    try {
        const conn = await monogoose.connect('mongodb://localhost:27017/database', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('MongoDB connected: ${conn.connection.host}');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }   
    
}
module.exports = connectDB;