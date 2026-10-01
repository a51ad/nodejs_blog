const express = require('express');
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const path = require('path')
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//HTTP longer
app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Trả về "Hello World!" khi truy cập vào trang chủ (root URL)
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

// Khởi chạy server tại cổng 3000
app.listen(port, () => {
    console.log(`Ứng dụng đang chạy tại http://localhost:${port}`);
});

