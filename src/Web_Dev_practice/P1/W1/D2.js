const nums=[1,2,3,4,5,6]
const doubledNums = nums.map((num)=>{
    return num*2
})
console.log(nums);
console.log(doubledNums);

const evenNums= nums.filter((num)=> num%2===0)
console.log(evenNums);

const nums2=[5,10,15]
const sum=nums2.reduce((acc,curr)=>acc+curr,0 )
console.log(sum);

const users = [
    { name: "Ashish", age: 17 },
    { name: "Akshay", age: 25 },
    { name: "Ravi", age: 19 }
  ];
const usersOver18 = users.filter((user)=>user.age>18).map((user)=>user.name);
console.log(usersOver18);
