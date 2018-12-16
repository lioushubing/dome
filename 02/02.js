// 解析出下面str中 数据
// 1-引入url模块

// 2 -使用
//  url.parse(要解析的url地址 ,是否解析queryString，默认false);
//  可以解析出url的各个部分内容  协议 域名 端口  查询字符串...
//  url.parse();作用是 解析url的各个部分， 不会自动解析查询字符串

let str = ' http://localhost:9999/details?id=9&name=zs&age=18';
const url=require('url')
str=url.parse(str,true).query
console.log(str);