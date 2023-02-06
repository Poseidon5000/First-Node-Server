const http = require('http');
const url = require('url');

const reqHandler = (req, res) =>{
const pathName = req.url;

if(pathName === '/'){
    res.end('THIS IS THE HOME PAGE')
}
else if(pathName === '/overview'){
    res.end("THIS IS THE OVERVIEW PAGE")
}
else if(pathName === "/products"){
    res.end("THIS IS THE PRODUCTS PAGE")
}
else{

    res.end("404! NOT FOUND")
}


res.end('Hello there')

};

const PORT = 8080

const server = http.createServer(reqHandler);

server.listen(PORT, ()=>{
    console.log(`Listening to response on port ${PORT}`);
})