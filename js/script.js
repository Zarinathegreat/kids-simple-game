$(document).ready(function(){
$(document).keydown(function(key){
switch(parseInt(key.which,10)){
case 37:
$('#dog').animate({left: "-=10px"}, 'fast');
break; 
	case 38:
$('#dog').animate({top: "-=10px"}, 'fast');
break;
	case 39:
$('#dog').animate({left: "+=10px"},'fast');
break;
	case 40:
	$('#dog').animate({top: "+=10px"}, 'fast');
		break;
			
	}
});

});