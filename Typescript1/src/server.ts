// import * as express from 'express';
// import * as bodyParser from 'body-parser';

// function loggerMiddileWare(request:express.Request,response:express.Response,next){
//     console.log(request.method,request.path);
//     next();

// }

// const app = express();

// const router = express.Router()

// app.use(bodyParser.json());
// app.use(loggerMiddileWare)

// router.get('/hello',(request,response)=>{
//     response.send("hello this is api")
// });
// app.use('/api',router);

// app.get('/hello',(request,response)=>{

//     response.send("hello this is teja sai manikanta");
// })
// app.post('/post',(request,response)=>{

//     response.send(request.body);
// })

// app.get('/',(request,response)=>{
//     response.send({
//         hostname:request.hostname,
//         path:request.path,
//         method:request.method
//     })
// })

// let port = 5000;

// app.listen(port,()=>{
//     console.log(`server is running on port ${port}`);
// })



import App from './app';
import PostsController from './posts/post.controller';
 
const app = new App(
  [
    new PostsController(),
  ],
  5000,
);
 
app.listen();