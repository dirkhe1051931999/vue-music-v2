const fs = require('fs');
const path = require('path');

// 指定要扫描的目录路径
const directoryPath = './module';

// 读取目录中的所有文件
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('读取目录出错:', err);
    return;
  }

  // 过滤出所有 .js 文件
  const jsFiles = files.filter((file) => path.extname(file) === '.js');

  // 生成模块映射对象
  const modules = jsFiles.reduce((acc, file) => {
    acc[file] = `require('.\\${path.join(directoryPath, file)}')`;
    return acc;
  }, {});

  // 生成最终的代码字符串，加个注释：这个自动生成的，不要手动改
  const moduleString = `/*这个自动生成的，不要手动改*/\nmodule.exports = ${JSON.stringify(modules, null, 2).replace(/"require\('.*?'\)"/g, function (match) {
    return match.slice(1, -1);
  })}`;

  // 将生成的代码写入新文件

  fs.writeFile('./modules.js', moduleString, (err) => {
    if (err) {
      console.error('写入文件出错:', err);
      return;
    }
    console.log('模块映射文件已生成');
  });
});