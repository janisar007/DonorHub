const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//dot config (If .env present in the config folder)
// dotenv.config(path: './config/')

//dot config (Here .env is present in root itself)
dotenv.config();

//mongoDB connection
connectDB();
const app = express();
// app.use(cors());

const allowedOrigins = ['http://localhost:3000', 'https://donor-hub-client.vercel.app'];

// Use CORS middleware
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (e.g., mobile apps or curl)
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            const msg = 'The CORS policy for this site does not allow access from the specified origin.';
            return callback(new Error(msg), false);
        }
    },
    credentials: true, // If using cookies or credentials
}));

//rest object

// app.use(cors());

//middlewares
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(
    `Server is Running on Port ${process.env.PORT}`
      .bgBlue.white
  );
});
