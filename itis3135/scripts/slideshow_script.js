var $ = function (id)
{
   return document.getElementById(id);
};

$(document).ready(function()
{
    // Preload images
    $("image_list a").each(function()
    {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // Event handlers
    $("image_list a").click(function(evt)
    {
        // Swap image
        var imageURL = new $(this).attr("href");
        $("#image").attr("src", imageURL);

        // Swap caption
        var caption = $(this).attr("title");
        $("#caption").textContent(caption);

        // Cancel default action of link
        evt.preventDefault();
    });

    // Move focus to first thumbnail
    $("li:first-child a:first-child").focus();
});