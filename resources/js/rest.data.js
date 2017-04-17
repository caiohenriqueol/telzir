$(document).ready(function(){
    // VALUES TO TABLE PRICE
    $.getJSON('price_table.json', function (data) {
        var items = data.data.map(function (item) {
            $("tbody")
                .append("<tr>"+
                            "<td>"+item.origin+"</td>"+
                            "<td>"+item.destiny+"</td>"+
                            "<td>"+item.cost+"</td>"+
                        "</tr>");
        });
    });

    // DATA TO REALIZE SIMULATION
    var simulation_data = {};

    $("#origin").find('a').on('click', function(event) {
        event.preventDefault();
        simulation_data.origin = $(this).text();
    });
    $("#destiny").find('a').on('click', function(event) {
        event.preventDefault();
        simulation_data.destiny = $(this).text();
    });
    $("#plan").find('a').on('click', function(event) {
        event.preventDefault();
        simulation_data.plan = $(this).text();

        console.log(simulation_data);
    });
    $(".minutes").on("change", function(event) {
        event.preventDefault();
        simulation_data.minutes = $(this).val();
    });
});
