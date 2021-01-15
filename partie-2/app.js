
var image = document.getElementById('image'),
    myDiv = document.getElementById('myDiv');

function change() {
  var x = document.getElementById("mySelect");
  var index = x.selectedIndex;

  switch( index )
  {
    case 1:
      myDiv.innerHTML = `<h3>Discription ici :</h3> <br> <img src='img/rezdechauss.jpg'>`;
      break;
    case 2:
      myDiv.innerHTML = `<h3>Discription ici :</h3> <br> <img src='img/1erEtage.jpg'>`;
      break;

    case 3:
      myDiv.innerHTML = `<h3>Discription ici :</h3> <br> <img src='img/salle a manger.jpg'>`;
      break;

    case 4:
      myDiv.innerHTML = `<h3>Discription ici :</h3> <br> <img src='img/cuisine.jpg'>`;
      break;

    case 5:
      myDiv.innerHTML = `<h3>Discription ici :</h3> <br> <img src='img/balcon.jpg'>`;
      break;

    case 6:
      myDiv.innerHTML = `<h3>Discription ici :</h3> <br> <img src='img/salleDeBain.jpg'>`;
      break;
    
    case 7:
      myDiv.innerHTML = `<h3>Discription ici :</h3> <br> <img src='img/salleDuSport.jpg'>`;
      break;

    case 8:
      myDiv.innerHTML = `<h3>Discription ici :</h3> <br> <img src='img/garage.jpg'>`;
      break;
      
    case 0:
      myDiv.innerHTML = `<h2>Rien à afficher !</h2>`;
      

  }
}