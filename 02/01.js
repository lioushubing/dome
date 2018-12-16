// id=9&name=zs&age=18
// 将上面的查询字符串转成 js对象
// 使用querystring模块即可
const queryString=require('querystring')

  let id='id=9&name=zs&age=18'

 id=queryString.parse(id)
console.log(id);
