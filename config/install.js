/**
*  auth: guangfa
*  读取文件夹并运行下载依赖
*/

const fs = require('fs');
const path = require('path');
const util = require('util');
const sub_app_ath = path.resolve();
const sub_apps = fs.readdirSync(sub_app_ath).filter(i => /^sub|main/.test(i));

console.log(`即将进入所有模块并下载依赖：${JSON.stringify(sub_apps)} ing...`)

const exec = util.promisify(require('child_process').exec);
function install() {
  sub_apps.forEach(async i => {
    console.log(`${i} 开始下载 后续不再提示 请自行查看`)
    const { stdout, stderr } = await exec('npm install', { cwd: path.resolve(i) });
    console.log(i, 'success', stdout)
    console.error(i, 'error', stderr)
  });
};
install()

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});
