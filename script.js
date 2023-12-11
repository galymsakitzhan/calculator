let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        // if(e.target.innerHTML == '='){
        //     string = eval(string); // let value = eval('1+1'); короче eval бул жерде стринг ретынде кабылдайды янги тобеде = турса ол теннын алдын окиды жане + - стрингтерды + - ретынде как интежер кабылдайды патом жауабын шыгарады
        //     alert(value); // 2
        //     input.value = string;
        // }else if(e.target.innerHTML == 'AC'){ // АС басылса
        //     string = ''; // пустой кыламыз
        //     input.value = string;
        // }else if(e.target.innerHTML == 'DEL'){ // DEL басылса бул жерде быр санды удалить етемыз 
        //         string = string.substring(0, string.length -1) // бул жерде -1 беру аркылы сонгы санды алып тастаймыз и все
        //         input.value = string;
        // }else{
        string +=e.target.innerHTML; // бул жерде просто сандарды енгызуге арналган
        input.value = string;
        // }
    })
})