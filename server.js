const http = require('http');
const url = require('url');
const fs = require('fs');

const overview = fs.readFileSync(`${__dirname}/overview.html`, "utf-8");
const card = fs.readFileSync(`${__dirname}/card.html`, "utf-8");
const products = fs.readFileSync(`${__dirname}/product.html`, "utf-8");



const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const productData = JSON.parse(data);

const replaceTemplate = (temp, product)=>{
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
    output= output.replace(/{%NUTRITION%}/g, product.nutrients)
    output= output.replace(/{%FROM%}/g, product.from)
    output= output.replace(/{%QUANTITY%}/g, product.quantity)
    output= output.replace(/{%PRICE%}/g, product.price)
    output= output.replace(/{%DESCRIPTION%}/g, product.description)
    output= output.replace(/{%IMAGE%}/g, product.image)
}

const reqHandler = (req, res) =>{
const pathName = req.url;

// if(pathName === '/'){
//     res.end('THIS IS THE HOME PAGE')
// }
if(pathName === '/overview'){
    res.writeHead(200, {
        'Content-type':"text/html"
    })
    res.end(overview)

    const cardsHtml = productData.map(el=> replaceTemplate(card, el))
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