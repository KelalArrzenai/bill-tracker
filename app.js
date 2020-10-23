app.use(passport.initialize()); 
app.use(passport.session()); 

//The passport will maintain persistent login sessions. In order for persistent sessions to work in the passport, the authenticated user must be serialized to the session and deserialized when subsequent requests are made.
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser());

const User = require('./models/user'); 

//define the strategy for passport
const LocalStrategy = require('passport-local').Strategy; 
passport.use(new LocalStrategy(User.authenticate())); 