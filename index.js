const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3001;

server.unsubscribe(middlewares);
server.use(router)

server.listen(port)

const cors=require("cors");
const corsOptions ={
   origin:'*',
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

server.use(cors(corsOptions)) // Use this after the variable declaration
