function shake(){
  
  let input = document.querySelector("input")
  

  if (input.value == ''){
  document.getElementById("console").style.fontSize = '5vw';
  document.getElementById("console").innerText = 'Please Enter Number';    
  }else if (input.value < 1){
    
   document.getElementById("console").style.fontSize = '5vw';
   document.getElementById("console").innerText = 'Positive Values Only';
   }else if (input.value % 15 === 0){ 
    document.getElementById("console").style.fontSize = '10vw';
    document.getElementById("console").innerText = "FIZZ BUZZ";
    document.getElementById('wrapper').className = 'shake';
  }else if (input.value % 2 === 0){
  document.getElementById("console").style.fontSize = '10vw';
  document.getElementById("console").innerText = 'FIZZ';
  document.getElementById('wrapper').className = 'shake';
  }else if(input.value % 3 === 0){
  document.getElementById("console").style.fontSize = '10vw';
  document.getElementById("console").innerText = 'BUZZ';
  document.getElementById('wrapper').className = 'shake';
  }else{
    document.getElementById("console").style.fontSize = '5vw';
    document.getElementById("console").innerText = 'No Fizz'
    setTimeout(function(){ 
    document.getElementById("console").innerText = 'No Buzz'
  },1000)
    
  }
    
    setTimeout(function(){ document.getElementById('wrapper').className = 'noshake';
    
    document.getElementById("console").style.fontSize = '36px';
    document.getElementById("console").innerText = '';
  },2000)
  
  }
  