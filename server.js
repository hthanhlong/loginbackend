const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const data = require("./MOCK_DATA.json");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => console.log("connected MongoDB")
);

const route = require("./routers/index");

app.use(cors());

route(app);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
