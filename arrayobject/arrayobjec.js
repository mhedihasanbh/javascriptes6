const students=[
    {id:21,name:"sajib bhuyan"},
    {id:22,name:"rakib molla"},
    {id:25,name:"sabbir hossain"},
    {id:30,name:"asib antor"}
];
const names=students.map(s => s.name);
const ids=students.map(s => s.id);
const bigger=students.filter(s => s.id>40);
console.log(names);