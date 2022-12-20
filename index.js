const express = require("express");
require("dotenv").config();
const UserRouter = require("./routes");
const authRoutes = require("./routes/routes");
const Connect_DB = require("./config/db");
const app = express();

//middleware
app.use(express.json());
app.use("/api/user", UserRouter);
app.use("/api", authRoutes);

// database connection
Connect_DB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Port is listening on port " + PORT);
});
