require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// --- Import Models ---
const UserModel = require('./model/UserModel');
const HoldingsModel = require('./model/HoldingsModel');
const PositionsModel = require('./model/PositionsModel');
const OrderModel  = require('./model/OrdersModel');

// --- Configuration ---
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key';

// --- App Initialization ---
const app = express();

// --- Middleware ---
// Middleware MUST be defined BEFORE your routes.
app.use(cors());
app.use(express.json());

// --- API Routes ---

// Root Route
app.get('/', (req, res) => {
    res.send("Welcome to the Root API!");
});

// User registration (Signup)
// app.post('/signup', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         if (!username || !password) {
//             return res.status(400).send('Username and password are required');
//         }
//         const userExists = await UserModel.findOne({ username });
//         if (userExists) {
//             return res.status(400).send('User already exists');
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);
        
//         const user = await UserModel.create({
//             username,
//             password: hashedPassword,
//         });

//         const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        
//         res.status(201).json({
//             _id: user._id,
//             username: user.username,
//             token,
//         });
//     } catch (error) {
//         console.error('Signup Error:', error);
//         res.status(500).send('Server error during signup');
//     }
// });

// // User login
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const user = await UserModel.findOne({ username });
//         if (user && (await bcrypt.compare(password, user.password))) {
//             const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
//             res.json({
//                 _id: user._id,
//                 username: user.username,
//                 token,
//             });
//         } else {
//             res.status(401).send('Invalid credentials');
//         }
//     } catch (error) {
//         console.error('Login Error:', error);
//         res.status(500).send('Server error during login');
//     }
// });


app.post('/signup', async(req, res) => {
    let {username, password} = req.body;
    let newUser = new UserModel({
        username,
        password,
    });

    newUser.save();
    res.send("user saved!");
});

app.post('/login', async(req, res) => {
    let {username, password} = req.body;
    if( db.find({username}) && db.HoldingsModel({password})) {
        console.log("Login successful!");
        res.send("succes!");
    }

    newUser.save();
})

// Get all Holdings
app.get('/allHoldings', async (req, res) => {
    try {
        const allHoldings = await HoldingsModel.find({});
        res.json(allHoldings);
    } catch (error) {
        res.status(500).send('Error fetching holdings');
    }
});

// Get all Positions
app.get('/allPositions', async (req, res) => {
    try {
        const allPositions = await PositionsModel.find({});
        res.json(allPositions);
    } catch (error) {
        res.status(500).send('Error fetching positions');
    }
});

// Insert new order
app.post('/newOrder', async (req, res) => {
    try {
        const { name, qty, price, mode } = req.body;
        const newOrder = new OrderModel({ name, qty, price, mode });
        await newOrder.save();
        res.status(201).send("Order saved successfully!");
    } catch (error) {
        console.error('New Order Error:', error);
        res.status(500).send('Failed to save order');
    }
});


// --- Server and DB Connection ---
const startServer = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("DB connected successfully!");
        
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to the database.", error);
        process.exit(1);
    }
};

startServer();