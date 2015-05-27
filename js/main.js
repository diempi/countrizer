/*
	Script for Countrizer App 
	Author: Didier A. E. Gabiam a.k.a DIEMPI
	Date: 05-28-2015
*/

// Variables 
var countriesTab = [],
    sApiUrl = 'https://restcountries.eu/rest/v1/all';

// Methods
function getCountries(sApiUrl){
      $.ajax({
              url:sApiUrl,
              dataType: 'jsonp',
              success: function(data){
                console.log(data);
            },
            error: function(){
                console.log('erreur');
            }
          });
}

$("#countryList").click(getCountries);