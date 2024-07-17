const url = "mongodb+srv://longpracticesummer:longpracticesummer123456@personblogging.umnak8i.mongodb.net/?retryWrites=true&w=majority&appName=PersonBlogging";
const connectDB = async () => {
    try {
        await mongoose.connect(
            url,
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        console.log('Connected to mongoDB')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}