let url="https://catfact.ninja/fact";
let div=document.querySelector('.box');
let inp=document.querySelector('input');
let btn=document.querySelector('button');
async function getFacts(){
    try{let json_data=await axios.get(url);
        let fact=json_data.data.fact;
        let p=document.createElement('p');
        p.innerText=fact;
        div.appendChild(p);}
        catch(error){
                console.log(error);
        }
    
}
function call(){
    let number=parseInt(inp.value);
    for(let i=0;i<number;i++)getFacts();
    inp.value="";
}
btn.addEventListener("click",call);

