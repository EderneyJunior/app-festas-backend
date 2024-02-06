import mongoose from 'mongoose'

export default async function main() {
    try{
        mongoose.set("strictQuery", true)

        await mongoose.connect(
            "mongodb+srv://ederney:PLpbplQIlNOoNKJs@cluster0.e4ay947.mongodb.net/?retryWrites=true&w=majority"
        )
    } catch (error){
        console.log(error)
    }
}