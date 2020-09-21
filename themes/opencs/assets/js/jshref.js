$(document).ready(function(){
    $(".quicklink").mousedown(function(e){
        switch(e.which)
        {
            case 1:
                document.location.href = $(this).attr("data-href");
            break;
            case 2:
                window.open($(this).attr("data-href"));
            break;
        }
        return true;
    });
});