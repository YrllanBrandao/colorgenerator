const areaColor1 = document.querySelector("#areaColor1");
 const areaColor2 = document.querySelector("#areaColor2");
 const areaColor3 = document.querySelector("#areaColor3");
 const areaColor4 = document.querySelector("#areaColor4");
 const areaColor5 = document.querySelector("#areaColor5");
 
 
 

 
const getColor = () =>{
  
  
  
  const letterColor = ["A", "B", "C", "D", "E", "F"];
  const numberColor = ["0", "1", "2", "2", "4","5","6","7","8","9"];
  const colorTemplate = ["#"];
  
  for(let i = 1; i < 7;i++)
  {
    
    const numberSort = Math.floor((Math.random()*2)+1);
    console.log(numberSort)
    
    switch(numberSort)
    {
      
      case 1://gera um numero
       
       const alpha = Math.floor((Math.random()*9));
       
       
       colorTemplate.push(numberColor[alpha]);
        
        
        break;
      
      case 2:
        //gera um letr
        const letra = Math.floor((Math.random()*5));
        
        colorTemplate.push(numberColor[letra]);
        
        break;
      
    }
  
  
  }


const color  = colorTemplate.join().replaceAll(',', "");

  
 return color;
 
};


//gerando cores iniciais
if(areaColor1)
 {
   const color = getColor();
   areaColor1.style.background =  `${color}`;
   
   const areaHex = document.querySelector('.color1');
   
   areaHex.value= `${color}`
   
   
   
   
 }
if (areaColor2)
{
 
   const color = getColor();
   areaColor1.style.background = `${color}`;
  
   const areaHex = document.querySelector('.color2');
  
   areaHex.value = `${color}`
}
if (areaColor3)
{
 const color = getColor();
 areaColor3.style.background = `${color}`;

 const areaHex = document.querySelector('.color3');

 areaHex.value = `${color}`
  
}
if (areaColor4)
{

  const color = getColor();
  areaColor4.style.background = `${color}`;
 
  const areaHex = document.querySelector('.color4');
 
  areaHex.value = `${color}`
}
if (areaColor5)
{

   const color = getColor();
   areaColor5.style.background = `${color}`;
  
   const areaHex = document.querySelector('.color5');
  
   areaHex.value = `${color}`
}



//menu Toogle

const menuMobile = document.querySelector("#menuToggle");
const navMenu = document.querySelector('#navMenu');

menuMobile.addEventListener('click', ()=>{
  
  navMenu.classList.toggle('active');
  menuMobile.classList.toggle('active');
})


//
const botaoGerador = document.querySelector('#botaoGerar');


botaoGerador.addEventListener("click", ()=>{
  
  
  if (areaColor1)
  {
    const color = getColor();
    areaColor1.style.background = `${color}`;
  
    const areaHex = document.querySelector('.color1');
  
    areaHex.value = `${color}`
  
  
  
  
  }
  if (areaColor2)
  {
  
    const color = getColor();
    areaColor1.style.background = `${color}`;
  
    const areaHex = document.querySelector('.color2');
  
    areaHex.value = `${color}`
  }
  if (areaColor3)
  {
    const color = getColor();
    areaColor3.style.background = `${color}`;
  
    const areaHex = document.querySelector('.color3');
  
    areaHex.value = `${color}`
  
  }
  if (areaColor4)
  {
  
    const color = getColor();
    areaColor4.style.background = `${color}`;
  
    const areaHex = document.querySelector('.color4');
  
    areaHex.value = `${color}`
  }
  if (areaColor5)
  {
  
    const color = getColor();
    areaColor5.style.background = `${color}`;
  
    const areaHex = document.querySelector('.color5');
  
    areaHex.value = `${color}`
  }
  
});



//copiando as cores para área de transferência



const inputColor = document.querySelectorAll('.inputColor');


inputColor.forEach((input)=>{
  
  
  input.addEventListener('click',()=>{
    
  
  input.select()
  
  document.execCommand("copy");
  
  
  
  input.classList.toggle('active');
  
  const cor = input.value;
  
  
  input.value = "Copiado!";
  
  setTimeout(()=>{
    
    input.value = `${cor}`;
    input.style.background = "rgba(0,0,0,.1)";
    
  },300)
  
  
  }
  )
  
});