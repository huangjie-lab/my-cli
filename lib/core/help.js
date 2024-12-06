const myHelp = (program) => {
    program.option('-f --framework <frameework>','设置框架')
    program.option('-v --version <version>','查看版本')
}

module.exports = myHelp