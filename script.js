$(document).ready(function() {

    var dateTest = moment().add(1,'days').format('l');
    console.log(dateTest);

    //add Future Dates to each blue box
    
    var futureDate1 = moment().add(1,'days').format('l');
    var futureDate2 = moment().add(2,'days').format('l');
    var futureDate3 = moment().add(3,'days').format('l');
    var futureDate4 = moment().add(4,'days').format('l');
    var futureDate5 = moment().add(5,'days').format('l');

    $('#date1').append(futureDate1);
    $('#date2').append(futureDate2);
    $('#date3').append(futureDate3);
    $('#date4').append(futureDate4);
    $('#date5').append(futureDate5);
    
    $("#getWeatherForecast").click(function() {
        var city = $("#city").val();
        var key = "0cf06c0b9a2b575dc7b68061487fd8c7";
        var date = moment().format('l');

        //Search for City, header
        
        $.ajax({
            
            
            
            url: 'https://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            type: 'GET',
            data: {q : city, appid: key, units: 'metric'},



            


                       
            success: function(data){
                //var longitude = data.coord.lon;
                //var latitude = data.coord.lat;
                

                
                var wf = '';
                $.each(data.weather, function(index, val) {
                    wf += '<h2><b>' + data.name +' (' + date + ')' + "</b>" + "<img src = 'https://openweathermap.org/img/w/" + data['weather'][0].icon + ".png'>" + "</h2>" + '<p>Temperature: ' + data.main.temp + '&deg;C  </p>'+ '<p>Humidity: ' + data.main.humidity + '%</p>'+ '<p>Wind Speed: ' + data.wind.speed + ' MPH</p>' + val.main + ', ' + val.description
                });
                $("#showWeatherForecast").html(wf);
            }
        })

        //search for City, forecast

        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/forecast',
            dataType: 'json',
            type: 'GET',
            data: {q : city, appid: key, units: 'metric', cnt: "0"},
            jsonpCallback: 'fetch data',
                       
            success: function(data){

                console.log(data['list'][2]['weather'][0].icon);
                var newArray = [];
                var x = 0;
                

                $.each(data.list, function(index, val) {
                var wf = '' ;
                var counter = x++;
                wf += "<img src = 'https://openweathermap.org/img/w/" + data['list'][counter]['weather'][0].icon + ".png'>" + "</br>" + "Temp: " + val.main.temp + "&degC" + "</br>" + "<p>Humidity: " + val.main.humidity + "%</p>" // Temperature
                wf += "</p>"
                newArray.push($(wf));
        });
                $("#futureTemp1").html(newArray[0]);
                $("#futureTemp2").html(newArray[1]);
                $("#futureTemp3").html(newArray[2]);
                $("#futureTemp4").html(newArray[3]);
                $("#futureTemp5").html(newArray[4]);    
            }
        });


    });

    var cityClick = $(".cities");

    $(cityClick).click(function() {
        var city = $(this).text();
        var key = "0cf06c0b9a2b575dc7b68061487fd8c7";
        var date = moment().format('l');

        //Click button, header
        
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            type: 'GET',
            data: {q : city, appid: key, units: 'metric'},
                       
            success: function(data){
                var wf = '';
                $.each(data.weather, function(index, val) {
                    wf += '<h2><b>' + data.name +' (' + date + ')' + "</b>" + "<img src = 'https://openweathermap.org/img/w/" + data['weather'][0].icon + ".png'>" + "</h2>" + '<p>Temperature: ' + data.main.temp + '&deg;C  </p>'+ '<p>Humidity: ' + data.main.humidity + '%</p>'+ '<p>Wind Speed: ' + data.wind.speed + ' MPH</p>' + val.main + ', ' + val.description
                });
                $("#showWeatherForecast").html(wf);
            }
        })

        //Click button, forecast

        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/forecast',
            dataType: 'json',
            type: 'GET',
            data: {q : city, appid: key, units: 'metric', cnt: "0"},
            jsonpCallback: 'fetch data',
                       
            success: function(data){

                console.log(data);
                var x = 0;
              
                var newArray = [];
                $.each(data.list, function(index, val) {
                var wf = '' 
                wf += "<img src = 'https://openweathermap.org/img/w/" + data['list'][counter]['weather'][0].icon + ".png'>" + "</br>" + "Temp: " + val.main.temp + "&degC" + "</br>" + "<p>Humidity: " + val.main.humidity + "%</p>" // Temperature
                wf += "</p>"
                newArray.push($(wf));
        });
                $("#futureTemp1").html(newArray[0]);
                $("#futureTemp2").html(newArray[1]);
                $("#futureTemp3").html(newArray[2]);
                $("#futureTemp4").html(newArray[3]);
                $("#futureTemp5").html(newArray[4]);    
            }
        });
    });
});
