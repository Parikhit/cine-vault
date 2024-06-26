import mongoose from 'mongoose';

export const connectDB = async () => {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {
        console.log('Already connected to MongoDB!');
        return;
    }

    if (connectionState === 2) {
        console.log('Connecting!...');
        return;
    }

    if (!process.env.NEXT_PUBLIC_MONGO_URI) throw new Error('MongoDB URI not provided!');

    await mongoose
        .connect(process.env.NEXT_PUBLIC_MONGO_URI, {
            dbName: 'cineVault',
            bufferCommands: false,
        })
        .then(() => console.log('Connected to MongoDB!'))
        .catch((error) => {
            console.log('Failed to connect to MongoDB!', error);
            throw error;
        });
};
