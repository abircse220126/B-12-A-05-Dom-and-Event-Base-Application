
const callButtons = document.querySelectorAll(".btn-call");
for (const button of callButtons) {
  button.addEventListener("click", () => {
    const serviceName = button.dataset.service;
    const phoneNumber = button.dataset.number;

    //  where we want to update the value 
     var displyCoin= parseInt(document.getElementById('coin-count').innerText)

        // calculate the coin 
        const updateCoin=(displyCoin)-20;

        // update UI 
        document.getElementById('coin-count').innerText=updateCoin ;

    if(displyCoin<20){
        alert("Not enough coins! You need at least 20 to make a call.");
         document.getElementById('coin-count').innerText=0 ;
          return ;
    }
    else{       
    alert(`Calling ${serviceName} at ${phoneNumber}`);  

    // kothai add korte chai
    const cartContainer=document.getElementById('cart-container')

    // ke add korte chi tha create koro
    const newElement=document.createElement("div")

    // Get current time 
      const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    newElement.innerHTML=`<div class="create-container bg-gray-50 rounded-lg pr-5 pl-5 pt-3 pb-3 flex justify-between items-center">
                              <div>
                              <h1 class="text-[16px] font-bold">${serviceName}</h1>
                              <p class="text-[16px] font-bold">${phoneNumber}</p>
                              </div>
                              <div>
                              ${timeString}
                              </div>`

    //  jakhane add korte hobe sekhane add koro that means cart container a add korte hobe 
    cartContainer.append(newElement)

    }
    }     
);
}

// call the clear button

 document.getElementById("clear-btn").addEventListener("click",function(){
    const cartContainer=document.getElementById('cart-container')
    cartContainer.innerHTML=""

 })


// for love button 

const loveIcon=document.getElementsByClassName("love-btn")
for(let icon of loveIcon){
    icon.addEventListener("click",function(){  
        let loveCount =document.getElementById("love-count").innerText
        const updateLove= parseInt(loveCount)+1;
        document.getElementById("love-count").innerText=updateLove
    })
}

// Card button 

const copyBtns=document.getElementsByClassName("copy-btn")
for(const copyBtn of copyBtns){
    copyBtn.addEventListener("click",function(){
        const copyCount=document.getElementById("copy-count").innerText
        const uCoin=parseInt(copyCount)+1;
        // console.log(uCoin)
        document.getElementById("copy-count").innerText=uCoin
    
    })
}


const copyBtn=document.getElementsByClassName("copy-btn")
for(const button of copyBtn){
    button.addEventListener("click",()=>{
        const copyName=button.dataset.copy
        const phoneNumber=button.dataset.number
        // console.log(copyName)
        // console.log(phoneNumber)
        
         alert(`${copyName} number at ${phoneNumber}`)
         navigator.clipboard.writeText(phoneNumber)
    })
}