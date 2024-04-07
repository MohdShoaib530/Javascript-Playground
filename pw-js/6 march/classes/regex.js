let pattern = 'pw';

let regExOne = new RegExp(pattern);

let flag = 'gi';
let regExTwo = new RegExp(pattern, flag);

let regExThree = /shoaib/gi
const strToCheck = 'hello my name is Mohd Shoaib and shoaib is a programmer. shoaib is learning js.'

const result = regExThree.test(strToCheck)
console.log(result);

const result2 = strToCheck.match(regExThree)
console.log(result2);

const result3 = strToCheck.replace(regExThree, 'shuaib')
console.log(result3);

const weburl = "https://pwskills.com/mohd%20shoaib";

const usableUrl = weburl.replace(/%\d0/,'-')
console.log(usableUrl);