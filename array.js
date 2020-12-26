
/**
 * auther:allezMZ
 * date:2020/12/25
 * 知识点：
 * 1.unshift 首部添加
 * 2.push 尾部添加
 * 3.shift 首部删除
 * 4.pop 尾部删除
 * 5.splice 任意位置添加或删除元素：
 * 
 * 6.concat 数组合并
 * 7.every  
 * 8.filter
 * 9.foreach
 * 10.join
 * 11.indexOf
 * 12.lastIndexOf
 * 13.map
 * 14.reverse
 * 15.slice
 * 16.some
 * 17.sort
 * 18.toString
 * 19.valueOf
 **/

 //1.unshift
 let a = [1,2,3]
 a.unshift(0)
 console.log('unshift',a);
 //2.push
 let b =[1,2,3]
 b.push(4)
 console.log('push',b);
 //3.shift
 let c = [1,2,3]
 c.shift()
 console.log('shift',c);
 //4.pop
 let d = [1,2,3]
 d.pop()
 console.log('pop',d);
 //5.splice
 let e = [1,2,3,4,5]
 e.splice(2,2,11,22,33)
 console.log('e',e);
 //6.concat
 let f=[1,2,3]
 let f1=[4,5,6]
 console.log('concat',f.concat(f1));

 //迭代器函数
 const isEven = x=>x%2===0
 //7.every  迭代数组的每个元素，直到函数返回false
 //8.some   迭代数组的每个元素，直到函数返回true
 let g = [1,2,3,4,5]
 console.log('every',g.every(isEven));
 console.log('some',g.some(isEven));
//9.forEach
let h = ['1','2','3','4']
h.forEach((item)=>{
console.log('forEach',item);
})
//10*.map 返回新数组的迭代方式，新数组存储了函数的返回值
//11*.filter  map中返回值为true的元素组成的新数组
console.log('map',g.map(isEven))
console.log('filter',g.filter(isEven))
//12*.reduce 接收一个具有四个参数的函数：previousValue,currentValues,index,array
//其中index 和 array是可选的参数。该函数会返回一个累加到叠加器的值
 console.log('reduce',g,g.reduce((previous,current)=>previous+current))
 //map filter reduce 是js函数式编程的基础

//ES6+新增加的数组方法
//13.for...of  遍历数组
let numbers= [1,2,3,4,5,6,7,8,9,10,11,12,13]
for(const n of numbers){
  console.log('for...of',n);
}
//15.reverse  反序
console.log('reverse',numbers.reverse());

//16.sort 排序
//16.1默认元素为字符串
console.log('sort(String)',numbers.sort());
// 1,10,11,12,13,2...
//16.2将元素作为数字排序
console.log('sort(number)',numbers.sort((a,b)=>a-b)  )
//16.3用于自定义排序
let friend =[
  {name:'lmz',age:21},
  {name:'X',age:1},
  {name:'Y',age:12},
  {name:'Z',age:6}
]
function friendSort(a,b) {
  if(a.age<b.age)
  return -1
  if(a.age==b.age)
  return 0
  if(a.age>b.age)
  return 1
}
friend.sort(friendSort)
console.log('friend',friend);

//17.indexOf 搜索  搜索到值返回对应的索引值(第一个元素)，未搜索到返回-1
//18.lastIndexOf 搜索  搜索到值返回对应的索引值(最后一个元素)，未搜索到返回-1
let x = [1,2,3,4,1,2,4,5]
console.log('number',numbers);
console.log('indexOf',x.indexOf(4));
console.log('lastIndexOf',x.lastIndexOf(4));
//19.find
//20.findIndex
//21.includes 数组中存在某个元素，返回true,否则返回false

//22.toString  将数组里的所有元素转化为一个字符串
//23.join      将数组用字符串分割开用join
let x22 = [1,2,3,4,5,6,7,8,9]
console.log('toString',x22.toString());
console.log('join',x22.join('*'));





