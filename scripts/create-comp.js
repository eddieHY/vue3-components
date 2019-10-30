const chalk = require('chalk')
const path = require('path')
const fs = require('fs-extra')
const uppercamelize = require('uppercamelcase')
const resolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(chalk.blue(`${message}`))
const successLog = message => console.log(chalk.blue(`${message}`))
const errorLog = error => console.log(chalk.blue(`${error}`))
const {
  vueTemplate,
  entryTemplate,
  mdDocs
} = require('./template')
const generateFile = (path, data) => {
  if(fs.existsSync(path)) {
    errorLog(`${path}文件已存在`)
    return
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (error) {
        errorLog(err.message)
        reject(err)
      } else {
        resolve (true)
      }
    })
  })
}

log('请输入要生成的组件名称,形如 demo 或者 demo-test')
let componentName = ''
process.stdin.on('data', async chunk => {
  let inputName = String(chunk).trim().toString()
})