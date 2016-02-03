jQuery(function($){
    $(document).ready(function(){
        var columns = parseInt($('input#ar_count').attr('value'))
        for (var i=0;i<columns;i++){
            hide_show_options(i)
        };
        $('input.rejectionwidget-checkbox').bind("change", function () {
            var column = $(this).closest('td').attr('arnum');
            hide_show_options(column);
        });
    });
});

function hide_show_options(column) {
    // Hide/show the rejection options divisions depending on the checkbox status
    var checkbox = $('td[arnum="'+column+'"] input.rejectionwidget-checkbox').attr('checked');
    if (checkbox == "checked") {
        // Showing the options-set
        $('td[arnum="'+column+'"] div.options-set').show();
    }
    else{
        // Hide the options-set
        $('td[arnum="'+column+'"] div.options-set').hide();
    }
}
