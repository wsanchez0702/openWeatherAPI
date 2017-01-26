$(document).ready(function(){
    $("#go").click(function(){
        //alert("hello");
        $("#search").val()
        var search= $("#search").val()
        //alert(search);
        var api_url= "https://api.apixu.com/v1/current.json?key=9bd032df87d94691b28132805171301&q=" 
        var full_url= api_url+search;
        alert (full_url)
        $.getJSON(full_url, function(response){
            //alert (response)
            console.log(response.current.temp_f)
            $("#weather-results").append("The temperature is  ")
            $("#weather-results").append(response.current.temp_f)
            $("#weather-results").append("The humidity is  ")
            $("#weather-results").append(response.current.humidity)
        });

    });
});
