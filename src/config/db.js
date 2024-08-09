import mongoose from "mongoose";

export const conexionDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/Sacefacha");
        console.log(">>>> db is connected!!!");
    } catch (error) {
        console.log(error);
    }
}
