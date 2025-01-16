import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    // Connecting to MongoDB using URI from environment variables
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Logging successful connection with the host
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // Handling connection failure with detailed error logging
    console.error("MongoDB connection error:", error.message); // Log error message
    console.error(error.stack); // Log stack trace for more details (optional but recommended for debugging)
    process.exit(1); // Optionally terminate the app on DB connection failure
  }
};
