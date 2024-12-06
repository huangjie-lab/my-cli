const inquirer = require('inquirer')
const config = require('../../config')
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
        console.log(answer);
    })
}

module.exports = myAction