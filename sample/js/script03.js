$(function(){

    let hako = 0;

    $("#button01").on("click",function(){
    for(let i=0; i < 10; i++)//10になるまで繰り返す(+2)
     {
        hako = hako + 2;
     } 
     $("#content").text(hako);
    })

    $("#button02").on("click",function(){
    for(let i=0; i < 10; i++)//10になるまで繰り返す(+1)
     {
        hako = hako + 1;
     } 
     $("#content").text(hako);
    })

    $("#button03").on("click",function(){
        setInterval(function(){
            hako = hako + 1;
            $("#content").text(hako);
        },1000)
    })

    $("#button04").on("click",function(){
        hako = 0;     //箱を空に
        $("#content").text(hako);
    })
 
})