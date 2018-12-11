const fs = require('fs');
const path = require('path'); // 解析需要遍历的文件夹
const filePath = path.join('./src/modules');

let pageModules = [];
/**
 * 遍历文件
 * @param {String} filePath 文件路径
 * @param {Array} pageModules 文件对象数组
 */
function traverseFile(filePath, pageModules){
    const files = fs.readdirSync(filePath);
    if (files) {
        files.forEach(filename => {
            const _filedir = path.join(filePath, filename);
            const _stat = fs.statSync(_filedir);
            let _pModule = null;
            if (_stat.isDirectory()) {
                _pModule = {
                    name: filename,
                    children: []
                };
                if (pageModules.children) {
                    pageModules.children.push(_pModule);
                } else {
                    pageModules.push(_pModule);
                }
                traverseFile(_filedir, _pModule);
            } else {
                if (!pageModules.pages) {
                    pageModules.pages = [];
                }
                pageModules.pages.push(filename);
            }
        });
    }
}

// const glob = require('glob');

// function getFileMap (dirText) {
//     let filePath = glob.sync(dirText);
//     filePath.forEach(file => {
//         console.log(file.replace(/src\/modules\//, ''));
//     })
// }

// getFileMap(filePath + '/**/*');

//调用文件遍历方法
traverseFile(filePath, pageModules);

module.exports = {
    pageModules: JSON.stringify(pageModules)
};
