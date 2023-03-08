const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://ramrodwal:ram121@gofoodcluster.m1kmqbp.mongodb.net/myapp?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
