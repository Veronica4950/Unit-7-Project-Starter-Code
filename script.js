$("button").click(function(){
    let name = $(".answer1").val();
    let answer3 = $(".answer3").val(); 
    let answer2 = $(".answer2").val();
  
    let prediction = (answer3*2035) ;
    
    $(".fortune-display").append ("<p>" + name  + "  will read " +    answer2 +   prediction +" by 2035" + "</p>");
    
   
});
