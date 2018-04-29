$(document).ready(function() {
    
    
          function light(){
               if($("#switch").attr("src") == "switchOff.png") {
                  $("#bulb").attr("src","bulbOn.gif");
                  $("#switch").attr("src","switchOn.png");
             
              } else{
                  $("#bulb").attr("src","bulbOff.gif")
                  $("#switch").attr("src","switchOff.png")
              }
          }
          
          function light1(){
               if($("#switch1").attr("src") == "switchOff1.png") {
                  $("#bulb1").attr("src","bulbOn1.gif");
                  $("#switch1").attr("src","switchOn1.png");
             
              } else{
                  $("#bulb1").attr("src","bulbOff1.gif")
                  $("#switch1").attr("src","switchOff1.png")
              }
          }
          
          function light2(){
               if($("#switch2").attr("src") == "switchOff2.png") {
                  $("#bulb2").attr("src","bulbOn2.gif");
                  $("#switch2").attr("src","switchOn2.png");
             
              } else{
                  $("#bulb2").attr("src","bulbOff2.gif")
                  $("#switch2").attr("src","switchOff2.png")
              }
          }
          
          $("#switch").click(function(){
              light();
              light2();
          })
          
          $("#switch1").click(function(){
              light1();
              light2();
          })
          
          $("#switch2").click(function(){
              light2();
              light1();
              light();
          })
          
          
          
          
})
          
          
          
          
          
          
          
          
          
          
          
        //   $("#switch2").click(function(){
        //      if($("#switch2").attr("src") =="switchOff2.png"){
        //           $("#bulb").attr("src","bulbOn.gif");
        //           $("#switch").attr("src","switchOn.png");
        //           $("#switch2").attr("src","switchOn2.png")
        //       } else if ($("#switch2").attr("src") == "switchOn2.png"){
        //           $("#switch2").attr("src","switchOff2.png")
        //           $("#switch").attr("src","switchOff.png");
        //           $("#bulb").attr("src","bulbOff.gif")
        //       }
        //   })
        
      

