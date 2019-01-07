
//function to achieve autofocus html attribute in Bootstrap modals
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

//function to show password after input
function myFunction() {
  var x = document.getElementById("passwordInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//function to close modal when esc key is pressed
$('#myModal').modal({
  keyboard: true
})
