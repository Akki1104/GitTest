let students = ['Arjun','Ankit','Ayush','Vipin'];
students.forEach(fun)
function fun(){
    console.log("This is an Item");
    document.write("This is an Item <br>");
}

const object = {a:1,b:2,c:3,d:4,e:5};
for (const x in object){
    console.log(`${x}:${object[x]}`);
}