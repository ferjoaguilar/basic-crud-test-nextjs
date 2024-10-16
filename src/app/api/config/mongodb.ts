import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI as string)
    /* console.log('MongoDB connected successfully') */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('MongoDB connection error:', error)
    process.exit(1) // Exit process with failure
  }
}
