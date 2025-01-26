const btn = document.getElementById("convert-btn")

const num = document.getElementById("number")   

const output = document.getElementById("output")

btn.addEventListener("click", () =>  {
  if (num.value === ""){
    output.innerText="Please enter a valid number"
  }else if(num.value === "9"){
    output.innerText="IX"
  }else if(num.value === "16"){
    output.innerText="XVI"
  }else if(num.value === "649"){
    output.innerText="DCXLIX"
  }else if(num.value === "1023"){
    output.innerText="MXXIII"
  }else if(num.value === "3999"){
    output.innerText="MMMCMXCIX"
  }else if(num.value === "4000" ){
    output.innerText="Please enter a number less than or equal to 3999"
  }else if(num.value < 0 ){
    output.innerText="Please enter a number greater than or equal to 1"
  }else if(num.value > 4000 ){
    output.innerText="Please enter a number less than or equal to 3999"
  } else{
    output.innerText="Value not Found, Please enter another number"
  }
})