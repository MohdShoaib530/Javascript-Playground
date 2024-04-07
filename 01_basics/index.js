const path = require('path');

console.log(path.sep);
console.log(process.env.PATH);
console.log(path.delimiter);

const currentFilePath = __filename;
console.log(currentFilePath);

let basename = path.basename(currentFilePath);
console.log(basename);

let baseNameWithoutExt = path.basename(currentFilePath,'.js')
console.log(baseNameWithoutExt);

let dir = path.dirname(currentFilePath)
console.log(dir);

console.log(path.extname(currentFilePath));

console.log(path.extname('index.md.js'));
let pathToFile = path.format({
    dir:'\public.html/hello/hi',
    base:'index.js'
});
console.log(pathToFile);

console.log(path.isAbsolute(currentFilePath));
console.log(path.isAbsolute('/indexedDB.js'));
console.log(path.isAbsolute('./index.js'));
console.log(path.isAbsolute('../ini.js'));

let pathToDir = path.join('/home','hi','hello','index.js')
console.log(pathToDir);

console.log(path.parse(currentFilePath));

console.log(path.resolve());

console.log(path.normalize('/home//hi\\hello\/index.js'));