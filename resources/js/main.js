$(document).ready(function(){
    $.getJSON('price_table.json', function (data) {
        var items = data.data.map(function (item) {
            $("tbody").append("<tr><td>"+item.origin+"</td><td>"+item.destiny+"</td><td>"+item.cost+"</td></tr>");
        });
    });
});