var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

require("dotenv").config();
const sequelize = require('./utils/db')
sequelize.authenticate().then(() => console.log('connect')).catch((error) => console.error(error))

// const connectDB = require("./utils/db");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const productRouter = require("./routes/product");
const Product = require("./models/Product");
const Merek = require('./models/Merek')

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", productRouter);

// connectDB();

(async () => {
  try {
    await Product.sequelize.sync({ alter: true });
    console.log("✅ Database synced");
  } catch (error) {
    console.error("❌ Sync failed:", error);
  }
})();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
