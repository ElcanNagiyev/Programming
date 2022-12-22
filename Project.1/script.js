
let select=document.querySelector('select');
let front_end=document.querySelector('.front-end');
let back_end=document.querySelector('.back-end');
let data_analytics=document.querySelector('.data-analytics');

select.addEventListener('change', (event)=>{
   switch(select.value){

    case '0':
        front_end.style.display='block';
        back_end.style.display='none';
        data_analytics.style.display='none';
    break;

    case '1':
        back_end.style.display='block';
        front_end.style.display='none';
        data_analytics.style.display='none';
    break;

    case '2':
        data_analytics.style.display='block';
        front_end.style.display='none';
        back_end.style.display='none';
    break;

   }
});

let html=document.querySelector('.Html');
let css=document.querySelector('.css');
let js=document.querySelector('.JavaScript');
let react=document.querySelector('.React');

let c3=document.querySelector('.C3');
let java=document.querySelector('.Java');
let node_js=document.querySelector('.Node-Js');
let php=document.querySelector('.PHP');
let sql=document.querySelector('.Sql');
let mysql=document.querySelector('.MySql');

let data_science=document.querySelector('.Data-Science');
let statistics=document.querySelector('.Statistics');
let excel=document.querySelector('.Excel');

let a1=document.querySelectorAll('.a1');
let a2=document.querySelectorAll('.a2');

for(let i=0; i<a1.length; i++){

    a1[i].addEventListener('change', (event)=>{

        a2[0].style.display='none';

        for(let j=0; j<a2.length; j++){
            if(i==j ){
                a2[j].style.display='block';
                console.log(i)
            }
           else{
               a2[j].style.display='none';
           }
            
        }
    })
}
