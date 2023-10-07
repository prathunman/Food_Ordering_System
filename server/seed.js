// manually insert dummby data to the database
const {faker} = require('@faker-js/faker');
const MongoClient= require('mongodb').MongoClient;
const _ = require('lodash');
async function main(){
    const url = 'mongodb://localhost://27017';
    const client = new MongoClient(url);

    try{
        await client.connect();
        const productsCollection = client.db('Food_Order_System').collection('Products');
        const categoriesCollection = client.db('Food_Order_System').collection('Categories');

        let categories = ['breackfast','lunch','dinner'].map((category)=>{
            return {name : category}
        });
        await categoriesCollection.insertMany(categories);
        let products = [];
        for(let i=0; i<10; i++){
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                description:faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category:_.sample[categories],   
            };
            products.push(newProduct);
        }
        await productsCollection.insertMany(products);
    }catch(e){
        console.log(e);
    }finally{
         await client.close();
    }
}

main();