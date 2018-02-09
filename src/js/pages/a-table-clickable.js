/*global $, jQuery*/
$(document).ready(function() {
            $('#click-table tbody tr').click(function() {
                var href = $(this).find("a").attr("href");
                if (href) {
                    window.location = href;
                }
            });
        });
//makes entire rows clickable on tablea