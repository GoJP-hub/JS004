// 各種インポート
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import {Logger} from "../services/logService"

// ライブラリーの読み込み
const app = express();
app.use(helmet());
app.use(cors());

// ルーターをインスタンス化する
const router = express.Router();

// Log4jsの設定
Logger.initialize();

// APIを登録する
router.get('/helloWorld', (req, res) => {
    res.status(200).send({ message: 'Hello, world' });
});

router.post('/helloWorld', (req, res)=> {
  console.log(req.body);
  res.json(req.body);
  Logger.accessLog("INFO", "API is called: POST-/helloWorld");
  Logger.accessLog("INFO", `API request: ${JSON.stringify(req.body)}`);
})

// -------------------------------------------------
//  以下、何のルーティングにもマッチしないorエラー
// -------------------------------------------------

// いずれのルーティングにもマッチしない(==NOT FOUND)
app.use((req, res) => {
    res.status(404);
    res.render('error', {
      param: {
        status: 404,
        message: 'not found'
      },
    });
  });

//routerをモジュールとして扱う準備
module.exports = router;