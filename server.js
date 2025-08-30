const express = require('express');
const connectDB = require('./database');
const authroutes = require('./routes/auth');
const authMiddleware = require('./Middleware/authMiddleware');
const app = express();
connectDB();
app.use(express.json());
app.use('/auth', authRoutes);
app.get('/dashboard', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Welcome to dashboard', userId: req.user.userId });
});
app.listen(1000, () => {
    console.log('Server running on port http://localhost:1000');
});
