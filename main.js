const refreshBtn =document.querySelector(".refresh-btn");
const maxPaletteBoxes=30;
const container=document.querySelector(".container");

const generatePalette = () => {
    container.innerHTML=""; //clearing the container 
    for (let i=0;i<maxPaletteBoxes;i++){
        //generating a random hexx color code
    let randomHex = '#'+Math.floor(Math.random()*0xffffff).toString(16);
    randomHex =  ( randomHex.padEnd(6,'0')) ;
    console.log(randomHex);

    //creating a new li element and insert it to the container
    
    const li=document.createElement("li");    
    li.classList.add("color");  
    li.innerHTML = ' <div class="rect-box" style="background:'+randomHex+'"></div><span class="hex-value">'+randomHex+' </span>' ;
    //adding a click event to current li element to copy the color
    li.addEventListener("click", () => copyLi(li, randomHex));
    container.appendChild(li);


    }
}
refreshBtn.addEventListener("click", generatePalette);
const copyLi=(elem, hexVal)=> {
    const liElement = elem.querySelector(".hex-value")
    navigator.clipboard.writeText(hexVal).then(()=>{
        liElement.innerText="Copied";
        setTimeout(()=>liElement.innerText=hexVal,1000);
        
    }).catch(()=> alert("Failed to copy"));
}



/*container.appendChild(li);
  const color=document.createElement("li");
    color.classList.add("color");*/
