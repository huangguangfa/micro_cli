/**
*  auth: weilan
*  读取文件夹并运行服务
*/

const fs = require('fs');
const path = require('path');
const util = require('util');
const sub_app_ath = path.resolve();
const sub_apps = fs.readdirSync(sub_app_ath).filter(i => /^sub|main/.test(i));

console.log(`即将进入所有模块并启动服务：${JSON.stringify(sub_apps)} ing...`)

const exec = util.promisify(require('child_process').exec);
function start() {
  sub_apps.forEach(async i => {
    // console.log(`${i} 开始启动 后续不再提示 请自行查看`)
    const { stdout, stderr } = await exec('npm run serve', { cwd: path.resolve(i) });
    // console.log(i, 'success', stdout)
    // console.error(i, 'error', stderr)
  });
  exec('start http://localhost:6001/');
};
start();

process.on('unhandledRejection', (reason, p) => {
  console.log('http://localhost:6001/');
});
