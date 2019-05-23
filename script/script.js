$(document).on("click", "input[name='send']", function sending () {
    var comment = $("textarea[name='comment']").val();
    $("<div class=\"comment\">" +
        "        <div class=\"comment__data\">" +
        "            <div>" +
        "                Лилия Семёновна" +
        "            </div>" +
        "            <div>" +
        "                14 октября 2011" +
        "            </div>" +
        "        </div>" +
        "        <div class=\"comment__content\">" + comment +
        "        </div>" +
        "    </div>").appendTo("#reviews");
});

$(function ()
{
    $(document).on("keydown", "#foot__text", function(e)
    {
        if ((e.keyCode == 13) && e.ctrlKey)
        {
            var comment = $("textarea[name='comment']").val();
            $("<div class=\"comment\">" +
                "        <div class=\"comment__data\">" +
                "            <div>" +
                "                Лилия Семёновна" +
                "            </div>" +
                "            <div>" +
                "                14 октября 2011" +
                "            </div>" +
                "        </div>" +
                "        <div class=\"comment__content\">" + comment +
                "        </div>" +
                "    </div>").appendTo("#reviews");
        }
    });
});

