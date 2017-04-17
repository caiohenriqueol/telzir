$(document).ready(function(){
    // PLANS CARD
    var i = 1;
    var plans = 3;
    var plans_minutes = 15;

    for (i=1;i<=plans;i++){
        plans_minutes = plans_minutes * 2;

        $(".plans")
            .append("<div class='col-sm-12 col-md-4 card'>"+
                        "<div class='card-header'>"+
                            "<h1 class='plans-name-card'>Telzir FaleMais</h1>"+
                            "<p class='card-size'>"+plans_minutes+"</p>"+
                        "</div>"+
                        "<div class='card-body'>"+
                            "<div class='card-advantages'>"+
                                    "<div class='advantage'>Com o plano FaleMais "+plans_minutes+
                                    " você fala por "+plans_minutes+" minutos completamente de <strong>graça</strong>*!</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>");
    }

    // INPUT DATA SIMULATION
    var location = ["011", "016", "017", "018"];
    var plans_name = ["FaleMais 30", "FaleMais 60", "FaleMais 120"];

    for (i=0;i<4;i++) {
        $("#origin")
            .append("<li><a href='#'>"+location[i]+"</a></li>");

        $("#destiny")
            .append("<li><a href='#'>"+location[i]+"</a></li>");
    }
    for (i=0;i<3;i++) {
        $("#plan")
            .append("<li><a href='#'>"+plans_name[i]+"</a></li>");
    }

    // CHANGE BUTTON VALUE
    $("#origin").find('a').on('click', function(event) {
        event.preventDefault();
        $(".origin").text($(this).text());
    });
    $("#destiny").find('a').on('click', function(event) {
        event.preventDefault();
        $(".destiny").text($(this).text());
    });
    $("#plan").find('a').on('click', function(event) {
        event.preventDefault();
        $(".plan").text($(this).text());
    });
});
