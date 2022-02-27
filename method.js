const student = {
    name: 'Rakib',
    id: 101,
    isRich:false,
    money:5000,
    major:'Mathmatics',
    subject:['English', 'Economic', 'High Math'],
    friend: {
         name:'Rofic',
         id:202,
         major:'mathmatics'
    },
    takeExgam: function(){
        console.log(this.name, 'taking-exgam')
    },
    treatDay:function(expense){
        this.money = this.money -expense;
        return this.money
    }


}
student.takeExgam()
 const treat = student.treatDay(900)
 const treat2 = student.treatDay(700)
 console.log(treat)
 console.log(treat2)
 