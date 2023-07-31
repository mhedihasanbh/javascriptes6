const person1={
    Fname:'sajib',
    Lname:'bhuyan',
    salary:15000,
    getFullName:function(){
        console.log(this.Fname,this.Lname);
    },
    chargeBill:function(amount){
       this.Salary=this.salary-amount;
       return this.salary;
    }
}

const person2={
    Fname:'rakib',
    Lname:'molla',
    salary:25000,
    
}

const person3={
    Fname:'asib ',
    Lname:'antor',
    salary:3000,
    
   
}
const personTwoBill=person1.chargeBill.bind(person2);
personTwoBill(2000);
console.log(person2.salary);

