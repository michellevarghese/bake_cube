const express=require('express');
const app=express();
const env= require('dotenv');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

//routes
const authRoutes=require('./routes/auth');
const adminRoutes=require('./routes/admin/auth');

//environment variable or const
env.config();

//mongodb connection
//mongodb+srv://michaela_varlov:<password>@clusterflipkart.epgjl.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@clusterflipkart.epgjl.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
            useNewUrlParser: true,
             useUnifiedTopology: true,
             useCreateIndex: true
            }
        ).then(()=>{
            console.log('Databse connected');
        });

app.use(express.json());
app.use('/api',authRoutes);
app.use('/api',adminRoutes);





/*
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',userRoutes);
*/

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);

});