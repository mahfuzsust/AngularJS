$(document).ready(function(){
	$("#giveName").keyup(function() {
		var value = $(this).val();
    	$( "#showName" ).text( "Hello " + value );
	});
});