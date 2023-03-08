$(document).ready(function(){
    console.log("hELLO");

$('#btn').click(function(){
var txt = '';
txt += "width :" +$('.main').width();
txt += "height :" +$('.main').height();
$('.main').html(txt);
})

});
