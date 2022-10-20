const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');
app.use(cors());
const news = require('./data/news.json');
//root 
app.get('/', (req, res)=>{
    res.send('News api running');
})
//news-categorires loading
app.get('/news-categories', (req, res)=>{
    res.send(categories);
})
//category/01 - display by id
app.get("/category/:id", (req, res)=>{
    const id = req.params.id;
    if(id === '08'){
        res.send(news)
    }else{
        const categoryNews = news.filter((n) => n.category_id === id);
        res.send(categoryNews);
    }
    
})
//news/id -each item showing
app.get('/news/:id', (req, res)=>{
    const id = req.params.id;
    const selected_news = news.find(n => n._id === id);
    res.send(selected_news);
})
//listening port
app.listen(port, ()=>{
    console.log('Dragon news running on port', port);
})