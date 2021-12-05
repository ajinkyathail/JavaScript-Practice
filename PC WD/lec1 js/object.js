//object -> group of key value pair
//key : value -> property
//key : function -> method

let cap = {
    name: "Ajinkya",
    lastName: "Thail",
    address: {
        city: "Karjat",
        state: "Maharashtra"
    },
    age: 26,
    isPassout : true,
    languages:["java","c","php"],
    sayHi:function(){
        console.log("cap say Hi");
    }
};
//::>get
/* console.log(cap.name);
console.log(cap.age);
console.log(cap.languages[1]);
cap.sayHi(); */
//::>set/update
/* console.log("cap:",cap)
cap.age = 36;
cap.isPassout =false;
cap.friends=["ajay","rahul","akash"];
console.log("cap :", cap); */
// delete
/* delete cap.address
console.log("cap:", cap); */

//FOR LOOP
/* for(let key in cap){
    console.log(key, " : ", cap[key])
} */

//Propkey

/* let Propkey = "age";
console.log(cap.age);
console.log(cap[Propkey]);
console.log(cap['age']); */

console.log(cap.xyz);
