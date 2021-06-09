$(document).ready(function () {

 $('#form').submit(function (event) {
   var formData = $('#form').serialize();
   $.ajax({
     url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScWdpwzY41igAEnsL1TW8yf587lQb86prpb5z7ZCcqrSrmJDg/formResponse",
     data: formData,
     type: "POST",
     dataType: "xml",
     statusCode: {
       0: function () {
         $(".end-message").slideDown();
         $("form").fadeOut();
         //window.location.href = "thanks.html";
       },
       200: function () {
         $(".false-message").slideDown();
       }
     }
   });
   event.preventDefault();
 });

});
