var diary="";

function saveHandler() {
    var date = $("#date").val();
    var text = $("#text").val();
    var mood = $("#mood").val();

    diary = `<p>${date}: ${text} - ${mood}</p>` + diary;

    $("#result").html(diary);

    localStorage.setItem("diary", diary);
}

$(document).ready(function() {
    
    if (diary == null) {
        diary = "";
    }

    diary = localStorage.getItem("diary");

    $("#result").html(diary);

	$("#save").click(saveHandler);

});