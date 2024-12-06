const myAction = require('./action')
const myCommand = (program) => {
    // 创建一个命令 可以创建多个
    program
    .command('create <project> [other...]')
    .alias('crt')
    .description('创建项目')
    .action(myAction)
}

module.exports = myCommand