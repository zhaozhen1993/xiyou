
$(function(){
	
	
	$('#left_menu li').click(function(){
		$('.l21').hide()
		 $('#fam').find('li').hide()
		 $('#left_menu li').attr('class','');
		  $(this).attr('class','active-farm-menu');
		$('.l21').eq($(this).index()).show();
		
		
		
		$('#fam').find('li').eq($(this).index()).show()
		
	    
	})
	
	
	
	
	
	
	
	
	
	
	
})
