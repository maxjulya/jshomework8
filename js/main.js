var sp = $("span");   //ищем все спаны  прячем их
sp.hide();

$("input").focus(function() {   // находим input на котором focus наведен
    sp.hide();                  // пусть спрячуться 
    $(this).next("span").show().delay(3000).fadeOut(400)     //this это input на который клацнули, next это ближайший сосед то есть span и мы ему говорим показаться на 3 сек а потом исчезнуть
});

//КАВЫЧКИ//
$('input[type="button"]').on("click", function(){ //делаем выборку button и по клику сделать show 
    sp.show().delay(1000).fadeOut(400);
});


$("input").on("mouseover", function() {   
    sp.hide();              
    $(this).next("span").show().delay(3000).fadeOut(400)
});