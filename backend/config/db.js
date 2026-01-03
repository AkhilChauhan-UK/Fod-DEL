import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://killerhyper89_db_user:akhil123456@cluster0.ngr8bb1.mongodb.net/food-del').then(() => console.log("Db connected"));
}