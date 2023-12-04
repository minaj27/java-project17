const mainDiv= document.getElementById("main");
const navDiv= document.getElementById("nav");
const subDiv= document.getElementById("sub");
const arrNav = ["fashion","Jwellary","electronics","mens","womens",]


const generateComponent=(title,liItems,type)=>{
    subDiv.innerText ='';
  const h1 = document.createElement("h1");
  h1.innerText= title;

  const ol=document.createElement("ol");
  ol.setAttribute("type",type);
  liItems.forEach((item)=>{
   const li=document.createElement("li");
   li.innerText=item;
   ol.appendChild(li);
  })
subDiv.appendChild(ol);
}

const handleClick=(curr)=>{
const fashion = ["Western","Eastern","Punjabi","South Indian","North Indian"];
const Jwellary = ["Ring","Neckless","Coin","Diamond Ring"];
const electronics = ["Tv","Washing Machine","Laptop","Monitor","Refrigator","Mixer"];
const mens = ["Tshirt","short","jeans","Formal","Browser"];
const womens = ["Punjabi","Saree","Western","Jacket"];

if(curr=="fashion"){
    generateComponent(curr,fashion,"1");
}else if(curr=="Jwellary"){
    generateComponent(curr,Jwellary,"a");
}else if(curr=="electronics"){
generateComponent(curr,electronics,"i")
}else if(curr=="mens"){
    generateComponent(curr,mens,"I")
}else {
    generateComponent(curr,womens,"A")
}

}

const generateNav=(arrNav)=>{

  arrNav.forEach((item)=>{
      const btn=document.createElement("button");
      btn.innerText =item;
      const func=`handleClick('${item}')`;
      btn.setAttribute("onclick",func);
      navDiv.appendChild(btn);
  })
}
generateNav(arrNav);