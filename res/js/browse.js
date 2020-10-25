$(document).ready(function () {
    $.get("https://private-anon-848b6c4be9-wad20postit.apiary-mock.com/profiles", function (data) {
        for (i = 0; i < data.length; i++) {
            var div = document.createElement('div');
            $(div).append('<img  src=' + data[i]["avatar"] + ' />')
                .append(data[i]["firstname"] + " ")
                .append(data[i]["lastname"] + "<br>")
                .append('<button onclick="clickedButton()" class="follow-button">Follow</button>')
                .appendTo($(".grid-container"))
        }
    })
});

function clickedButton() {
    $('.follow-button').click(function () {
        var text = $(this).text()
        if (text === "Follow") {
            $(this).text("Followed")
        } else {
            $(this).text("Follow")
        }

        $(this).toggleClass('followed');
    });
}