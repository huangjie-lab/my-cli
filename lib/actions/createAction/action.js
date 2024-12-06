const inquirer = require('inquirer')
const config = require('../../../config')
const myDownload = require('./download')
const myAction = (project,argv) => {
    // console.log(project);
    // console.log(argv);
    inquirer.prompt([
        {
            message:'你选择的初始化框架:',
            type:'list',
            name:'framework',
            choices: config.framework
        }
    ]).then(answer => {
        myDownload(project,answer)
    })
}

module.exports = myAction