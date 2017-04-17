$(document).ready(function(){
    var base_url = "../telzir-back-end/public/index.php/api/telzir/";

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

    $("#simulation").on("click", function() {
        $.ajax({
            method: "GET",
            url: base_url+"falemais",
            dataType: 'json',
            data: simulation_data
        }).done(function(data) {
            if (!$(".simulation-values").length) {
                $(".simulation-result")
                    .append("<table class='table table-bordered simulation-values'>"+
                                "<thead>"+
                                    "<tr class='active'>"+
                                        "<th>Origem</th>"+
                                        "<th>Destino</th>"+
                                        "<th>Tempo</th>"+
                                        "<th>Plano FaleMais</th>"+
                                        "<th>Com FaleMais</th>"+
                                        "<th>Sem FaleMais</th>"+
                                    "</tr>"+
                                "</thead>"+
                            "</table>");
            }
            $(".simulation-values")
                        .append("<tbody>"+
                                    "<tr class='active'>"+
                                        "<th>"+simulation_data.origin+"</th>"+
                                        "<th>"+simulation_data.destiny+"</th>"+
                                        "<th>"+simulation_data.minutes+"</th>"+
                                        "<th>"+simulation_data.plan+"</th>"+
                                        "<th>R$"+data.data.with_plan+"</th>"+
                                        "<th>R$"+data.data.without_plan+"</th>"+
                                    "</tr>"+
                                "</tbody>");
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
    });
    $(".minutes").on("change", function(event) {
        event.preventDefault();
        simulation_data.minutes = $(this).val();
    });
});
