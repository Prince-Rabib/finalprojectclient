const array = ['rabib', 'sakib','mashfee','munshat','Ishmam','azwad'];

array.splice(1,3);

console.log(array);

const test = ()=>{
      
       return (
             {
                  Name:'Md.Rabib Hossain',
                  age:'25',
                  year: '2001',
                  function(writing){
                        return (
                             {
                                 name : this.Name,
                                 age: this.age,
                                 test: writing
                             }
                        )
                  }
                  
             }
       )

}


console.log(test().function('its working'));