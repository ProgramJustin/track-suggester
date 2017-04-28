
$(document).ready(function() {

  $("form").submit(function() {


     var ruby = $("input:radio[name=ruby]:checked").val();
     var design = $("input:radio[name=design]:checked").val();
     var php = $("input:radio[name=php]:checked").val();
     var cHash = $("input:radio[name=cHash]:checked").val();
     var moreTracks  = $("input:radio[name=moreTracks]:checked").val();

     if(ruby === "option1" && design === "option2" && php === "option3" && cHash === "option4") {

       alert("you chose ruby, design and php, chash");

     } else if (ruby === "option1" && design === "option2") {

       alert("ruby and design");

     } else if (ruby === "option1" && php === "option3") {

       alert("ruby and php");

     } else if (design === "option2" && php === "option3") {

       alert("deisgn and php");

     } else if (ruby === "option1") {

       alert("ruby");

     } else if (design === "option2") {

       alert("design");

     } else if (php === "option3") {

       alert("php");

     } else if (cHash === "option5") {

        alert("c#")

     } else if (moreTracks) {

       alert("more Tracks");

     }

  });
});
