const express = require('express');
const app = express();
const port = 3000;

// Trả về "Hello World!" khi truy cập vào trang chủ (root URL)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Khởi chạy server tại cổng 3000
app.listen(port, () => {
    console.log(`Ứng dụng đang chạy tại http://localhost:${port}`);
});

