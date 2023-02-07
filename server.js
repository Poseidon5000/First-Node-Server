const http = require('http');
const url = require('url');
const fs = require('fs')

const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const productData = JSON.parse(data);

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

else if (pathName === "/api"){
    res.writeHead(200, {
        'Content-type':'application/json'
    })
    res.end(data)
}


else{
res.writeHead(404, {
    'Content-type': 'text/html',

});
    res.end("<h1>404! NOT FOUND</h1>")
}


// res.end('Hello there')

};

const PORT = 8080

const server = http.createServer(reqHandler);

server.listen(PORT, ()=>{
    console.log(`Listening to response on port ${PORT}`);
})