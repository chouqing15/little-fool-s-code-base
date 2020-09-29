


// 原型链
//   # 原型链是由 _proto_ 连接成的一条链条， _proto_是每个对象都拥有的属性
let obj = {};
//obj._proto_



// 原型继承
let parentClass = function (name) { 
    this.name = name || 'parentClass';
}

parentClass.prototype.checkName = function () {
    return this.name;
}
 
let childClass = function (name) {
    this.name = name || 'childClass';
}

childClass.prototype = new parentClass();

let living = new childClass('aaa');

console.log(living.checkName()); //  # aaa

// 缺点 ， 父元素的引用属性会被所有子元素所共享。 不能向父级传参

 //  ----------------- 构造函数式继承    ---------------

// 区别点在于 ⬇️， 并且去掉了 childClass.prototype = new parentClass();

	let childClass = function (name){
		this.name = name || 'aaa';
		parentClass.call(this);
	}



//  将父元素的属性都通过call复制一份给子元素

//缺点：  每次子实例都创建了一份父元素， 资源浪费 。 2 : 如果父元素做了修改 ， 已创建的子元素无法马上体现出来。 后创建的子实例才有。

//  ------------------ 组合式继承 -----------
	// 就是组合原型继承和构造函数继承 一起使用 

	// 缺点： 父元素的被创建了2次 。 资源浪费


	



 