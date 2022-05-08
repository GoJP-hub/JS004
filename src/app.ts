// 各種インポート
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import {Logger} from "./services/logService"

// ライブラリーの読み込み
const app = express();
app.use(helmet());
app.use(cors());
const bodyParser = require('body-parser');

// 環境変数呼び出し
const port = process.env.PORT || 3000; 

//body-parserの設定
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ルーティングの設定
const router = require('./routes/baseRoute');
app.use('/', router);

// Log4jsの設定
Logger.initialize();

//サーバ起動
app.listen(port, ()=> Logger.systemLog("INFO", `App is listening on port ${port}`))