$(document).ready(function(){
	$('#quantitytype1').click(function(){
		if(!$(this).hasClass('active')){
			$(this).find('input').attr('checked','');
			$('#quantitytype2 input').removeAttr('checked');
			quantity=$('#ureaquantity').val();
			if(quantity!='0'){
				$('.quantity').each(function(){
					oldvalue=$(this).val();
					newvalue=oldvalue/quantity;
					$(this).val(newvalue);
				});
			}
		}
	});
	$('#quantitytype2').click(function(){
		if(!$(this).hasClass('active')){
			$(this).find('input').attr('checked','');
			$('#quantitytype1 input').removeAttr('checked');
			quantity=$('#ureaquantity').val();
			if(quantity!='0'){
				$('.quantity').each(function(){
					ab=$(this);
					oldvalue=$(this).val();
					newvalue=oldvalue*quantity;
					$(this).val(newvalue);
				});
			}
		}
	});
});			