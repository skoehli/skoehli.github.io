$(document).ready(function() {


        // preload the image for each link
        $("#image_list a").each(function()
        {
                var fadedImage = new Image();
                fadedImage.src = $(this).attr("href");
                
                // set up the event handlers for each link
                $("#image_list a").click(function(evt)
                {
                        // get the image URL and caption for each image and animate the caption
                        $("image").fadeOut(2000);
                        $("#caption").fadeOut(2000,
                            function()
                            {
                                nextImageLink = $("li:next-child a:next-child").attr("href");
                                nextCaption = $("li:next-child a:next-child").attr("title");

                                $("#image").attr("href", nextImageLink).fadeIn(2000);
                                $("#caption").text(nextCaption).fadeIn(2000);
                            });
                        
                });
        
        

    			

            // cancel the default action of each link
            evt.preventDefault();
        });

    // move the focus to the first link
    $("li:first-child a:first-child").focus();

}); // end ready