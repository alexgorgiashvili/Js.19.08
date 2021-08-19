let slider = $("#myRange");
let output = $("#demo");

slider.on("input", function(){
    let val = $(this).val();
    output.text(val + "%");
   $(".slideimg").css({

    "width":" "+val+"%     "

   })

})