// 檔案路徑：deploy/ghpages.js
// 參考：https://github.com/tschaub/gh-pages

import path from 'path';
import { fileURLToPath } from 'url';
import ghpages from 'gh-pages';

// 取得 __dirname（在 ES 模組中需自行計算）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/meng-hsiu/Homepage.git', // 專案的 GitHub repo
};

const callback = (err) => {
    if (err) console.error(err);
    else console.log('Publish success');
};

// 部署至 gh-pages 分支
ghpages.publish(path.resolve(__dirname, '../dist'), options, callback);
