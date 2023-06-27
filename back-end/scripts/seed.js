// Importing Mongoose, User model and seed_data
import mongoose from "mongoose";
import { User } from "../model/index.js";
import data from "./seed_data.json" assert{type: "json"};

// Dropping the database before seeding
await mongoose.connection.dropDatabase();

// Looping through the seed data and creating new users
for (const userData of data.users) {
  const newUser = new User({
    name: userData.name,
    email: userData.email,
    password: userData.password,
  });

  // Saving new user in database
  newUser.save()
    .then(savedUser => {
      console.log("Yap, User saved successfully:", savedUser);
    })
    .catch(error => {
      console.log("Nope, saving user failed:", error);
    });
};
