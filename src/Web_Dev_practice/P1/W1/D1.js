const name1="ashish"
console.log(`Hi, ${name1}`);
nonArrowFn()
function nonArrowFn(){
    console.log('this is a non arrow function, can be called before initialization');
}
const arrowFn = ()=>{
    console.log('this is an arrow function, cannot be called before initialization');
}
arrowFn()

function introduce(name, age){
    console.log(`${name} is ${age} years old`);   
}
introduce("akshay",40)