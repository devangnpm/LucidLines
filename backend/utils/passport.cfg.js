require("dotenv").config();
const passport = require("passport");
const prisma = require("../db/prismaclient");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;


// JWT options
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWTKEY,
};

// Configure Passport JWT strategy
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const userId = jwt_payload.userId;
      
      // Fetch the user based on the userId from the JWT payload
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      // If user is found, authenticate
      if (user) {
        return done(null, user);
      } else {
        return done(null, false, { message: "User not found" });
        // You could also choose to create a new account here if needed
      }
    } catch (error) {
      console.error("Error while verifying JWT", error);
      return done(error, false);
    }
  })
);

module.exports = passport;
