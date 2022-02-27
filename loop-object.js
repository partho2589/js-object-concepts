const bottol = {
    color:'yellow',
    hold:'weter',
    price:50,
    isClears:true
};

/* 
1. for(let i = 0; i<10: i++) {}
2. for ( const num of numbers) {} // array ar upor
3. for ( const prop in student) {} // object ar upor
*/


for ( const popl in bottol){
    // console.log(popl)
    // console.log( popl, bottol[popl])
}


const keys = Object.keys(bottol)
for ( const prop of keys){
    // console.log(prop, bottol[prop])
}

for( const [keys, values] of  Object.entries(bottol)){
    console.log(keys, values )
}