$(function(){

    var info = document.getElementById("content");
    
    $("li").click(function(){
        var x = $(this).attr("id");
        if(x == 1){
            info.innerHTML = "MedIm <br> MedIA <br> FINKI-Med";
        }
        if(x == 2){
            info.innerHTML = "FINKI-Edu <br> Edu-Buddy <br> FINKI-LE <br> FINKI-Math";
        }
        if(x == 3){
            info.innerHTML = "eTax <br> FINKI-Tax <br> Tax-All <br> mySalary";
        }
        if(x == 4){
            info.innerHTML = "FINKI-game <br> Grelima <br> Edaolith <br> Foessa <br> Jeroen";
        }
    })

    $("span").click(function(){
        var y = $(this).attr("id");
        if(y == 5){
            info.innerHTML = "Алберт Ајнштајн <br> Ален Тјуринг <br> Архимед";
        }
        if(y == 6){
            info.innerHTML = "Скопје <br> Прилеп <br> Велес";
        }
        if(y == 7){
            info.innerHTML = "Ул. Есенска 24/5 1000 Скопје <br> +38921234567 <br> finkiit@iaispit.com";
        }

    })


})