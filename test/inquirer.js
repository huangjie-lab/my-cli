// 测试代码
const inquirer = require('inquirer')

inquirer.prompt([
    {
        message:'你的名字',
        type:'input',
        name:'username'
    }
]).then(answer => {
    console.log(answer);
    
})