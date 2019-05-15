import xpress from 'express'
import dotenv from 'dotenv'
import log_user from './controller/log_user'
import log from './controller/log'
import users from './controller/users'
import login from './controller/login'
import { connectDb } from './models/db';
import bodyParser from 'body-parser'


let app = xpress()

dotenv.config()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res)=>{
    res.end('Hello world!')
})
// app.use('/names', (req,res,next)=>{
//     res.json()
// })

app.use('/log_user', log_user)
app.use('/log', log)
app.use('/users', users)
app.use('/login', login)


connectDb().then(async () => {
    app.listen(process.env.PORT, '127.0.0.1', () =>
      console.log('Connected!!'),
    );
});