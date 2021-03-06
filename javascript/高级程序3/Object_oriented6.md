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
> 构造函数以大写字母开头,目的就是为了区分构造函数和普通函数.  
构造函数与工厂函数不同的地方有:
- 没有显示的创建对象
- 直接将属性和方法赋给了this对象
- 没有return 语句

创建构造函数实例,必须要使用new操作符, new操作符经历了一下步骤:
- 创建一个对象
- 将构造函数赋给了新对象,this也就指向了新对象(就好比将新对象传入函数执行了一次,并且拥有了构造函数的所有属性和方法,同时也拥有了构造函数的原型,这里就解决了上面所说的对象识别问题)
- 返回这个对象
>  使用`instanceof`来检测对象的类型
```
const person = new createPerson('gred',21);
person instanceof Object // true
person instanceof Person // true
```
#### 构造函数的问题
> 创建构造函数的同时,每个方法都会在每个实例上面重新创建一次. 函数也对象,每定义一个函数,就是实例化了一个对象,这是一种资源浪费.可以通过原型模式来解决这个问题。  

## 原型模式
> 原型对象,及通过`prototype`指向的一个对象, `prototype`是函数的一个属性, 每个函数都会有一个`prototype`, `prototype`会被所以构造函数实例化的对象所共享.  

> 所有原型对象`prototype`都会自动获得一个`constructor`属性, 指向`prototype`属性所在函数的指针. 

构造函数拥有一个`prototype`属性, 指向一个原型对象, 没个函数都会拥有一个`prototype`, 每个`prototype`属性指向的对象又会拥有一个`constructor`属性, 指向构造函数
```
function[person].prototype -> {constructor:person}
```
> 通过构造函数创建出来的实例, 该实例的内部包含一个指针`__proto__`。  

**`__proto__`连接存在与实例与构造函数的原型对象之间, 和构造函数没有直接关系。**  

这个属性无法直接访问,但是可以通过`isPrototypeOf`方法来确定对象之间是否存在这种关系。
```
Person.prototype.isPrototypeOf(person)   -> return boolean;
```
> 通过`getPrototypeOf(target)`方法来获取实例的原型对象;

`Object.getPrototypeOf(person) -> prototype`  

> 通过`hasOwnProperty(property)`,来检测属性是存在与实例中还是原型中。  

`Object.hasOwnProperty('name') -> return boolean` `true`表示存在与实例,`false`表示存在与原型  

#### 原型与in操作符
>2种方式使用in操作符,for-in中使用, 单独使用in  

>in会通过对象能够访问给定属性时返回true(原型或者实例)
```
'name' in person -> return boolean
```
> `hasPrototypeProperty()`方法表示是否是原型属性, 如果实例中存在与原型相同的属性, 则返回false。 此方法返回boolean值;

>`for-in`返回所有可枚举属性(包含原型属性).`Object.key()`如果传入实例对象,则只返回实例属性(不包含原型);  

> `Object.getOwnPropertyNames()`方法返回所有实例属性(包含不可枚举属性);

