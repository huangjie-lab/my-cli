const download = require('download-git-repo')
const chalk = require('chalk');
const ora = require('ora');
const successCb = (info) => {
    console.log(
        chalk.green(info),
    );
}
// 给代码downloading提示
const spinner = ora('downloading code...').start(); 
const cb = (res) => {
    console.log(res);
    if(!res){
        spinner.color = 'yellow';
        spinner.text = 'downloading success';
        setTimeout(() => {
            spinner.stop();
            successCb('downloading success')
        }, 1500);
    }else{
        spinner.color = 'red';
        spinner.text = 'downloading failed';
        setTimeout(() => {
            spinner.stop();
            successCb('downloading failed reason' + res)
        }, 1500);
    }
    
}
download('direct:https://github.com/huangjie-lab/testgit.git#main','./download',cb)

