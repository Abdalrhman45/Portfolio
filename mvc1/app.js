const express = require('express');
const connectDB = require('./config/dbConfig');
const userRouter = require('./Routers/userRouter');
const usertypeRouter = require('./Routers/userTypeRouter');
const homeRouter = require('./Routers/homeRouter');
const aboutRouter = require('./Routers/aboutRouter');
const servicesRouter = require('./Routers/servicesRouter');
const educationRouter = require('./Routers/educationRouter');
const experienceRouter = require('./Routers/experienceRouter');
const cors = require('cors');
const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

connectDB();
app.use('/images',express.static('./images/home'));
app.use('/images',express.static('./images/about'));

app.use('/usertype',usertypeRouter);
app.use('/user',userRouter);
app.use('/home',homeRouter);
app.use('/about',aboutRouter);
app.use('/services',servicesRouter);
app.use('/education',educationRouter);
app.use('/experience',experienceRouter);



app.listen(port, _=> console.log('server started at port 3000'))