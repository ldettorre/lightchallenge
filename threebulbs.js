$(document).ready(function() {
          $("#switch").click(function(){
               if($("#switch").attr("src") == "switchOff.png") {
                  $("#bulb").attr("src","bulbOn.gif");
                  $("#switch").attr("src","switchOn.png");
             
              } else{
                  $("#bulb").attr("src","bulbOff.gif")
                  $("#switch").attr("src","switchOff.png")
              }
          })
          
          $("#switch1").click(function(){
               if($("#switch1").attr("src") == "switchOff1.png") {
                  $("#bulb1").attr("src","bulbOn1.gif");
                  $("#switch1").attr("src","switchOn1.png");
             
              } else{
                  $("#bulb1").attr("src","bulbOff1.gif")
                  $("#switch1").attr("src","switchOff1.png")
              }
          })
          
          $("#switch2").click(function(){
               if($("#switch2").attr("src") == "switchOff2.png") {
                  $("#bulb2").attr("src","bulbOn2.gif");
                  $("#switch2").attr("src","switchOn2.png");
             
              } else{
                  $("#bulb2").attr("src","bulbOff2.gif")
                  $("#switch2").attr("src","switchOff2.png")
              }
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
})

