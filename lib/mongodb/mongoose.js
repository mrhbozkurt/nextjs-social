import mongoose, { mongo } from "mongoose";


let isConnetcted = false;

export const connectToDB = async () => {
    mongoose.set('strickQuery', true)

    if (isConnetcted) {
        console.log("MongoDB is already connected");
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "Social",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnetcted = true
        
        console.log("MongoDB is connected")
    } catch (error) {
        console.log(error);
    }

};