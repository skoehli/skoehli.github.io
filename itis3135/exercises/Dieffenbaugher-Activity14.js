$(document).ready(function() {


    $.getJSON("json_files/toobin.json", function(data)
    {
        $.each(data, function(key, value)
        {
            $("#speaker").append(
                value.month + " " + value.title
            )
        })

    });

    /*$.getJSON("json_files/sorkin.json", function(data)
    {
        $.each(this, function(key, value)
        {
            $("speaker").append(
                value.month + " " + value.title
            )
        })

    });

    $.getJSON("json_files/chua.json", function(data)
    {
        $.each(this, function(key, value)
        {
            $("speaker").append(
                value.month + " " + value.title
            )
        })

    });

    $.getJSON("json_files/sampson.json", function(data)
    {
        $.each(this, function(key, value)
        {
            $("speaker").append(
                value.month + " " + value.title
            )
        })

    });*/

	
}); // end ready