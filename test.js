    var action;
//     $('#test').click(function(){
   $('#test').bind('click', function(e){
        e.preventDefault();
        
        var now       = new Date().getTime();
        var lastTouch = $(this).data('lastTouch') || now + 1;  /* In the first time, this will make delta a negative number */
        var delta     = now - lastTouch;
        clearTimeout(action);

        if(delta < 300 && delta > 0) {
        	$('#test-out').text('double click');
        } else {
            $(this).data('lastTouch', now);
            action = setTimeout(function(e) {
            	$('#test-out').text('single click');
                clearTimeout(action);
            }, 300);
        }

        $(this).data('lastTouch', now);
    });
