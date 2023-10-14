import { Words } from "../models/main.mjs";

class mainController {
    async Language(req, res) {
        const language = req.body.language||'english';

        const query = await Words.findAll({attributes: ['word', 'article', [language,'translation']]});

        res.json({
            query: query,
            status: res.statusCode,
        })
    }
  }  

  export default mainController;