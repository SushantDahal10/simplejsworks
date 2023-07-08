
let count=0;
let previous=document.getElementById("previous");
let value=document.getElementById("container");

//document.getElementById("container").innerHTML(count);
 increment=()=>{
    count++;
    value.innerText=count;
    //document.getElementById("container").innerText(count);
   

}
decrement=()=>{
    count--;
    value.innerText=count;

   

}
save=()=>{
    let d=count + " -"
    previous.textContent += d;
    value.textContent=0;
    count=0;
  
    
}