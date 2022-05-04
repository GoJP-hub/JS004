"use strict";
// import express from 'express';
// import helmet from 'helmet';
// import cors from 'cors';
// const app = express();
// app.use(helmet());
// app.use(cors());
// const bodyParser = require('body-parser');
// //body-parserの設定
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// const port = process.env.PORT || 3000;
// //ルーティングの設定
// const router = require('./routes/');
// app.use('/', router);
// //サーバ起動
// app.listen(port);
// console.log('listen on port ' + port);
const hello = (name) => console.log('Hello', name);
hello('Tarou');
