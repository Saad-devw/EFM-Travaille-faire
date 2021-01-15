const showAll = document.getElementById('showAll');
const div = document.querySelector('.result');
const select = document.getElementById('selectBox');

function afficher(){
  const index = select.selectedIndex;
const taille = select.options.length;

  for( let i=0 ; i < taille - 1 ; i++ )
  {
    div.innerHTML = `
      <h1>taille total : ${taille}<h1> <br>
      <h1>index selected : ${select[index].index}<h1> <br>
      <h1>text selected : ${select[index].text}<h1> 

    `;
  }
}

function afficher2(){
  const taille = select.options.length;

  for( let i = 1 ; i < taille - 1 ; i++ )
  {
    div.innerHTML += `
      <h2>${select[i].text}</h2> <br>
    `;
  }
}