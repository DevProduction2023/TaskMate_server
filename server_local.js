const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/utils/db/config');
const cookieParser = require('cookie-parser');
const userRouter = require('./src/routes/authRouter')
const listRouter = require('./src/routes/ListOprations');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors(
    {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    origin: true,
    }
));

app.use('/api/auth', userRouter);
app.use('/api/list', listRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
