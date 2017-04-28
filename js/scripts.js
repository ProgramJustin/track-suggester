
$(document).ready(function() {

  $("form").submit(function(event) {

    event.preventDefault();

     var ruby = $("input:radio[name=ruby]:checked").val();
     var design = $("input:radio[name=design]:checked").val();
     var php = $("input:radio[name=php]:checked").val();
     var cHash = $("input:radio[name=cHash]:checked").val();
     var moreTracks  = $("input:radio[name=moreTracks]:checked").val();

     if(ruby === "option1" && design === "option2" && php === "option3" && cHash === "option4") {

       alert("you chose ruby, design and php, chash");
       $("img#showRuby").show();
       $("img#showDesign").show();
       $("img#showPHP").show();
       $("img#showCsharp").show();

     } else if (ruby === "option1" && design === "option2") {

       $("img#showRuby").show();
       $("img#showDesign").show();

     } else if (ruby === "option1" && php === "option3") {

       $("img#showRuby").show();
       $("img#showPHP").show();

     } else if (design === "option2" && php === "option3") {

       $("img#showDesign").show();
       $("img#showPHP").show();

     } else if (ruby === "option1") {

       $("img#showRuby").show();

     } else if (design === "option2") {

       $("img#showDesign").show();

     } else if (php === "option3") {

       $("img#showPHP").show();

     } else if (cHash === "option4") {

        $("img#showCsharp").show();

     } else if (moreTracks === "option5") {

       alert("For more tracks check out www.epicodus.com");

     }
  });
});
