
 const add=(a,b)=>{

console.log(add(4,3));//

const add=(a,b)=>a+b;

console.log(add(4,3));

const add=a=>a+5;

console.log(add(4,3));*/

setTimeout(()=>{
console.log("after 500ms"); // using for patch and  animation
},5000);*/
 function sub(a,b){
    console.log("sub");
    return(a-b);
}

console.log(sub(10,6));
function mult(a,b){
    return(a*b);
}console.log(mult(4,5));


function div(a,b){
    return(a/b);
}console.log(div(10,2));


function mod(a,b){
    return(a%b);
}console.log(mod(10,5));


const mult1=(a,b)=>a*b
console.log(mult1(4,3));


const sqr=(a)=>a*a
console.log(sqr(4));


console.log(Math.sqrt(4));



console.log(Math.log10(10));

const print_personDetails=(person)=>{
    const{name,age}=person;
    console.log(name);
    console.log(age);

}

const person={
    name:"Raeez",
    age:23,
    sayhello:()=>{
    console.log("hello");
    },
    bestFriend:{
        name:"Afraz",
        age:23,
    }
};
person.job="Software Engineer";
const{bestFriend,name,age,sayhello,job}=person;
print_personDetails(person);
print_personDetails(bestFriend);
//console.log(bestFriend,name,age);//
sayhello();
console.log(job);


