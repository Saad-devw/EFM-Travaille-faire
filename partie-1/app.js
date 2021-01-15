const num1 = document.getElementById('val-A'),
      num2 = document.getElementById('val-B'),
      sum = document.getElementById('sum'),
      mult = document.getElementById('mult'),
      sub = document.getElementById('sub'),
      divi = document.getElementById('divi'),
      sumAnswer = document.getElementById('sum-res'),
      subAnswer = document.getElementById('sub-res'),
      multAnswer = document.getElementById('mult-res'),
      divAnswer = document.getElementById('divi-res') ;



/* generate New Number */
function Alea(){

  num1.value = Math.floor(Math.random() * 101) ;
  num2.value = Math.floor(Math.random() * 101) ;

  /* initialize background Color */
  sum.style.background = "white";
  sub.style.background = "white";
  mult.style.background = "white";
  divi.style.background = "white";
  
  /* clear Inputs */
  sum.value = '';
  sub.value = '';
  mult.value = '';
  divi.value = '';

  sumAnswer.value = '';
  subAnswer.value = '';
  multAnswer.value = '';
  divAnswer.value = '';
}

Alea();


/* check Out Answer */

function Verifier(){

  if( sum.value == '' ) 
  {
    sum.style.background = "orange";
    sum.focus();
  }else{
    sum.style.background = "white";
  }
  if( sub.value == '' ) 
  {
    sub.style.background = "orange";
    sub.focus();
  }else{
    sub.style.background = "white";
  }
  if( mult.value == '' ) 
  {
    mult.style.background = "orange";
    mult.focus();
  }else{
    mult.style.background = "white";
  }
  if( divi.value == '') 
  {
    divi.style.background = "orange";
    divi.focus();
  } else{
    divi.style.background = "white";
  }
  
}

/*        resetAll        */
function Solution()
{
  sumAnswer.value = Number(num1.value) + Number(num2.value);

  subAnswer.value = Number(num1.value) - Number(num2.value);

  multAnswer.value = Number(num1.value) * Number(num2.value);

  divAnswer.value = Number(num1.value) / Number(num2.value);

  //********** style *******************/

      if( sumAnswer.value == sum.value)
      {
        sum.style.background = "green";
      }
      else{
        sum.style.background = "red";
      }
    
      // La Soustraction
      if( subAnswer.value == sub.value)
      {
        sub.style.background = "green";
      }
      else{
        sub.style.background = "red";
      }
    
      // La Multiplication
      if( multAnswer.value == mult.value)
      {
        mult.style.background = "green";
      }
      else{
        mult.style.background = "red";
      }
    
      // La Division
      if( divAnswer.value == divi.value)
      {
        divi.style.background = "green";
      }
      else{
        divi.style.background = "red";
      }
}











//   }


// /*    fill with result    */
// sumAnswer.value = Number(num1.value) + Number(num2.value);

// subAnswer.value = Number(num1.value) - Number(num2.value);

// multAnswer.value = Number(num1.value) * Number(num2.value);

// divAnswer.value = Number(num1.value) / Number(num2.value);