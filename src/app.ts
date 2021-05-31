import express from "express";
import bodyParser from "body-parser";
import path from "path";


// Create Express server
const app = express();

// Connect to MongoDB


// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use((req, res, next) => {
   
    next();
});
app.use((req, res, next) => {
    // After successful login, redirect back to the intended page
    next();
});

app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * Primary app routes.
 */



/**
 * API examples routes.
 */


/**
 * OAuth authentication routes. (Sign in)
 */


export default app;