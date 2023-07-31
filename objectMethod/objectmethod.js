const person={
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
person.chargeBill(3000);
console.log(person.salary);