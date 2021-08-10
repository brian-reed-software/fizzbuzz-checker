function shake(){
  
  let input = document.querySelector("input")
  
  document.getElementById('wrapper').className = 'shake';
  
    
   if (input.value === '0' || null){
   document.getElementById("console").innerText = input.value;
   }else if (input.value % 15 === 0){ document.getElementById("console").innerText = alert(input);
  }else if (input.value % 2 === 0){
  docuwment.getElementById("console").innerText = 'FIZZ';
  }else if(input.value % 3 === 0){
  document.getElementById("console").innerText = 'BUZZ';
  }else{
    document.getElementById("console").innerText = ':(';
  }
    
    setTimeout(function(){ document.getElementById('wrapper').className = 'noshake';
  document.getElementById("console").innerText = '';
  },2000)
  
  }
  