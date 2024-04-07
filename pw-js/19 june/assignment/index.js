const express = require('express');

const app = express();

const port = 3010;
const hostname = 'localhost';

app.get('/',(req,res) => {
   res.send('Welcome to Women and Man dummy data')
});

// mens dummy data 

app.get('/mens',(req,res) => {
    const jsonData = [
        {
          "Product": "Men's Dress Shirt",
          "Brand": "ClassicElegance",
          "Size": "Large",
          "Color": "Blue",
          "Price": "$49.99"
        },
        {
          "Product": "Leather Wallet",
          "Brand": "LuxeLeather",
          "Material": "Genuine Leather",
          "Color": "Brown",
          "Price": "$39.99"
        },
        {
          "Product": "Sports Watch",
          "Brand": "SportMaster",
          "Model": "ChronoPro",
          "Features": "Water-resistant, Stopwatch",
          "Price": "$79.99"
        },
        {
          "Product": "Men's Running Shoes",
          "Brand": "RunFast",
          "Size": "10.5",
          "Color": "Black/Red",
          "Price": "$89.99"
        },
        {
          "Product": "Men's Cologne",
          "Brand": "ScentMasters",
          "Fragrance": "Midnight Oud",
          "Size": "100ml",
          "Price": "$59.99"
        },
        {
          "Product": "Denim Jeans",
          "Brand": "UrbanDenim",
          "Style": "Slim Fit",
          "Size": "32x34",
          "Color": "Dark Blue",
          "Price": "$59.99"
        },
        {
          "Product": "Men's Grooming Kit",
          "Brand": "GroomPro",
          "Includes": "Electric Shaver, Beard Trimmer, Hair Clippers",
          "Price": "$129.99"
        },
        {
          "Product": "Sunglasses",
          "Brand": "SunShade",
          "Style": "Aviator",
          "Frame Material": "Metal",
          "Lens Color": "Black",
          "Price": "$79.99"
        },
        {
          "Product": "Men's Leather Jacket",
          "Brand": "RebelRider",
          "Size": "Medium",
          "Color": "Black",
          "Material": "Genuine Leather",
          "Price": "$149.99"
        },
        {
          "Product": "Casual Sneakers",
          "Brand": "StreetStyle",
          "Size": "9",
          "Color": "White",
          "Price": "$59.99"
        }
      ]
      
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(jsonData));
 });

 // womens dummy data 

 app.get('/womens',(req,res) => {
     const womenJson = [
        {
          "Product": "Women's Dress",
          "Brand": "ElegantWear",
          "Size": "Medium",
          "Color": "Red",
          "Price": "$79.99"
        },
        {
          "Product": "Designer Handbag",
          "Brand": "LuxuryBags",
          "Material": "Leather",
          "Color": "Black",
          "Price": "$199.99"
        },
        {
          "Product": "Wristwatch",
          "Brand": "FashionTime",
          "Model": "GlamourGaze",
          "Features": "Water-resistant, Crystal-studded",
          "Price": "$129.99"
        },
        {
          "Product": "Women's Running Shoes",
          "Brand": "RunLite",
          "Size": "8",
          "Color": "White/Pink",
          "Price": "$89.99"
        },
        {
          "Product": "Perfume",
          "Brand": "FragranceElegance",
          "Fragrance": "Blossom Bliss",
          "Size": "50ml",
          "Price": "$69.99"
        },
        {
          "Product": "Denim Jeans",
          "Brand": "ChicDenim",
          "Style": "Skinny Fit",
          "Size": "28x30",
          "Color": "Light Blue",
          "Price": "$69.99"
        },
        {
          "Product": "Makeup Kit",
          "Brand": "GlamBeauty",
          "Includes": "Eyeshadow Palette, Lipstick Set, Brushes",
          "Price": "$79.99"
        },
        {
          "Product": "Sunglasses",
          "Brand": "GlamShades",
          "Style": "Cat Eye",
          "Frame Material": "Acetate",
          "Lens Color": "Gradient Brown",
          "Price": "$59.99"
        },
        {
          "Product": "Women's Leather Jacket",
          "Brand": "Fashionista",
          "Size": "Small",
          "Color": "Brown",
          "Material": "Genuine Leather",
          "Price": "$149.99"
        },
        {
          "Product": "Casual Sandals",
          "Brand": "BeachWalk",
          "Size": "7",
          "Color": "Beige",
          "Price": "$49.99"
        }
      ]
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(womenJson));
 });

 // If did not found the right url

 app.get('/other',(req,res)  => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Page not found')
 })
 

app.listen(port,() => {
    console.log(`server is working on ${port} on ${hostname}`);
});