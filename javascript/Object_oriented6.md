## 理解对象
> 对象的创建分为对象字面量和Object实例两种方式创建。
```
var obj = new Object();
var obj = {};
```

## 对象的属性类型
#### 数据属性
- [[configurable]] 表示是否可以通过delete删除属性
- [[Enumerable]] 表示是否可以通过for-in 循环返回属性
- [[Writable]] 表示是否可以修改属性值
- [[Value]] 包含属性的数据值， 默认undefined
  - [[get | set]] 包含读取属性和写入属性的调用函数, 默认undefined  

修改属性的默认特性， 通过`Object.defineProperty(target, property, describe)`方法
```
var person = {};
Object.defineProperty(person,'name', {
  value:'Nicholas',
  // 这里只能包含数据属性
})
```
并且`Object.defineProperty()`,方法只能调用一次.

## 定义多个属性
```
Object.defineProperties(person,{
  year:{
    value:1,
    writable:false
  },
  editioin:{
    value:2,
    writable:false
  }
})
```
## 读取属性的特性
`Object.getOwnPropertyDescriptor(target,property)`
```
let descriptor = Object.getOwnPropertyDescriptor(person,'year');
descriptor.configurable; //false
descriptor.value; //1

```
## 工厂模式
> 及创建多个相同对象的实现.
```
function createPerson(name,age){
  let person = new Object();
  person.name = name;
  person.age = age;
  return person;
}
```
> 为了解决对象识别问题(对象的类型),构造函数出生了。
## 构造函数
-------------------------------------------------
====================
构造函数与工厂函数不同的地方有:
- 没有显示的创建对象
- 直接将属性和方法赋给了this对象
- 没有return 语句  
> 构造函数以大写字母开头,目的就是为了区分构造函数和普通函数.
> 创建构造函数实例,必须要new操作符, new操作符经历了一下步骤:
- 创建一个对象
- 将构造函数赋给了新对象,this也就指向了新对象(就好比将新对象传入函数执行了一次,并且拥有了构造函数的所有属性和方法,同时也拥有了构造函数的原型,这里就解决了上面所说的对象识别问题)
- 返回这个对象