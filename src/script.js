let alertButtonEles = document.querySelectorAll('.alert-button');

alertButtonEles.forEach(button => {
  button.onclick = function() {
    alert("It's not working beacause of it's just a responsive front-end website");
  };
});


let trvelAlertElement = document.querySelectorAll(".travel-now");
trvelAlertElement.forEach(travelAlert => {
  travelAlert.addEventListener('click', function(){
    alert("It's not working beacause of it's just a responsive front-end website");

  })
});