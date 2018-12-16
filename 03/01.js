let obj = {
    name: '涛涛',
    age: 38,
    sex: '男',
    hobby: '鹏鹏',
    car: {
        brand: 'forever',
        color: 'green',
        pirce: 9.98
    }
}
obj=JSON.stringify(obj,null,2)
console.log(obj);