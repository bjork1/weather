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
        var iconCode = data.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            type: 'GET',
            data: {q : city, appid: key, units: 'metric'},
           
            success: function(data){
                var wf = '';
                $.each(data.weather, function(index, val) {
                    wf += '<h2><b>' + data.name +' (' + date + ')' + "</b>" + '/h2' + '<p>Temperature: ' + data.main.temp + '&deg;C  </p>'+ '<p>Humidity: ' + data.main.humidity + '%</p>'+ '<p>Wind Speed: ' + data.wind.speed + ' MPH</p>' + val.main + ', ' + val.description
                });
                $("#showWeatherForecast").html(wf);
            }
        })

        //Add array forecast call

        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/forecast',
            dataType: 'json',
            type: 'GET',
            data: {q : city, appid: key, units: 'metric', cnt: "0"},
            jsonpCallback: 'fetch data',
                       
            success: function(data){
              
                //var wf = "";
                var newArray = [];

                $.each(data.list, function(index, val) {

                var wf = "<p>" // Opening paragraph tag
// Icon weather
//wf += "<b>Day " + index + "</b>: " // Day
                            wf += "Temp: " + val.main.temp + "&degC" + "</br>" + "<p>Humidity: " + val.main.humidity + "%</p>" // Temperature
//wf += "<span> | " + val.weather[0].description + "</span>"; // Description
// wf += "Humidity: " + list.main.humidity

                            wf += "</p>" // Closing paragraph tag
                           newArray.push($(wf));
        });

                            $("#futureTemp1").html(newArray[0]);
                            $("#futureTemp2").html(newArray[1]);
                            $("#futureTemp3").html(newArray[2]);
                            $("#futureTemp4").html(newArray[3]);
                            $("#futureTemp5").html(newArray[4]);

        //End array forecast call
    
    }
});

    var cityClick = $(".cities");

    $(cityClick).click(function() {
        var city = $(this).text();
        var key = "0cf06c0b9a2b575dc7b68061487fd8c7";
        var date = moment().format('l');
        
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            type: 'GET',
            data: {q : city, appid: key, units: 'metric'},
                       
            success: function(data){
                var wf = '';
                $.each(data.weather, function(index, val) {
                    wf += '<h2><b>' + data.name +' (' + date + ')' + "</b><img src = "+ val.icon + ".png></h2>" + '<p>Temperature: ' + data.main.temp + '&deg;C  </p>'+ '<p>Humidity: ' + data.main.humidity + '%</p>'+ '<p>Wind Speed: ' + data.wind.speed + ' MPH</p>' + val.main + ', ' + val.description
                });
                $("#showWeatherForecast").html(wf);
            }
        })

        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/forecast',
            dataType: 'json',
            type: 'GET',
            data: {q : city, appid: key, units: 'metric', cnt: "0"},
            jsonpCallback: 'fetch data',
                      
            success: function(data){              
                //var wf = "";
                var newArray = [];
                
                      //for (i = 0; i < data.list.length; i++) {

                            $.each(data.list, function(index, val) {

                            var wf = "<p>" // Opening paragraph tag
                            // Icon weather
                            //wf += "<b>Day " + index + "</b>: " // Day
                            wf += "test" + weather.icon + "Temp: " + val.main.temp + "&degC" + val.main.humidity + "words" // Temperature
                            //wf += "<span> | " + val.weather[0].description + "</span>"; // Description
                           // wf += "Humidity: " + list.main.humidity
                            
                            wf += "</p>" // Closing paragraph tag

                            newArray.push($(wf));

                            });
                        

                       // }

                            



                            /*
                        
                        $.each(data.list, function(index, val) {
                            wf += "<p>" // Opening paragraph tag
                            wf += "<b>Day " + index + "</b>: " // Day
                            wf += val.main.temp + "&degC" // Temperature
                            wf += "<span> | " + val.weather[i].description + "</span>"; // Description
                            wf += "</p>" // Closing paragraph tag

                        
                            */
                            

                            //newArray.push($(wf));

                            console.log(newArray);

                            /*
                            wf.forEach(testy => {
                                newArray.push({
                                    testy
                                })
                            })
                            */                    
                            $("#futureTemp1").html(newArray[0]);
                            $("#futureTemp2").html(newArray[1]);
                            $("#futureTemp3").html(newArray[2]);
                            $("#futureTemp4").html(newArray[3]);
                            $("#futureTemp5").html(newArray[4]);
                    //push each item into a new array                
            }
        });
    });
});
});