function shake(){
  
  let input = document.querySelector("input")
  

  if (input.value < 1){
  document.getElementById("console").innerText = 'Please Enter Positive Number';    
   else if (input.value === ''){
   document.getElementById("console").innerText = 'No Value Entered';
   }else if (input.value % 15 === 0){ 
    document.getElementById("console").innerText = "FIZZ BUZZ";
    document.getElementById('wrapper').className = 'shake';
  }else if (input.value % 2 === 0){
  document.getElementById("console").innerText = 'FIZZ';
  document.getElementById('wrapper').className = 'shake';
  }else if(input.value % 3 === 0){
  document.getElementById("console").innerText = 'BUZZ';
  document.getElementById('wrapper').className = 'shake';
  }else{
    document.getElementById("console").innerText = ':(';
  }
    
    setTimeout(function(){ document.getElementById('wrapper').className = 'noshake';
  document.getElementById("console").innerText = '';
  },2000)
  
  }
  