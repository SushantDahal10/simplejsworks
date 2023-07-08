let myleads=[];
const delete1 = document.getElementById("btn-delete");
const inputel=document.getElementById("inputbtn");
const inputbtn=document.getElementById("btn-save");
let list=document.getElementById("ul");
let leadsfromlocal=JSON.parse(localStorage.getItem("myleads"));

console.log(leadsfromlocal);
//localStorage.clear();
delete1.addEventListener("dblclick",function(){
    list.innerHTML=" ";
})

inputbtn.addEventListener("click",function(){
    myleads.push(inputel.value);
    inputel.value=" ";
    localStorage.setItem("myleads",JSON.stringify(myleads));

    console.log(myleads);
    let listitem="";
    for(let i=0;i<myleads.length;i++){
        listitem+= "<li><a href='#' target='_blank'>"+ myleads[i] +"</a></li>";
    }
    list.innerHTML=listitem;

})

