/* Countrizer
 * Application de gestion planning de séries
 * Codé par Didier A. E. Gabiam a.k.a DIEMPI
 * Date: 05-28-2015
 */

/*jslint regexp: true, vars: true, white: true, browser: true */
/*jshint nonstandard: true, browser: true, boss: true */
/*global jQuery */

( function ( $ ) {
	"use strict";

	// Variables 
	var sApiUrl = 'https://restcountries.eu/rest/v1/all',
		countriesTab = [];

	// Methods
	function getCountries(){

		// GET Text state
		//$("#countryList")[0].childNodes[0].nodeValue == "ROLL")
				// Remove tthe content of the countries DIV Container
				$("#countries").children("p").remove();
				// Change button text
				$("#countryList").text("STOP");

				// Build the datas
			      $.ajax({
			            url: sApiUrl,
			            type: 'GET',
			            async: false,
		        		dataType: 'json',
			            success: function(data){

			                 var aCountriesData = data;
			                 for (var i = 0; i < aCountriesData.length; i++) {
			                 	countriesTab[i] = aCountriesData[i].name;
			                 }
			                
			            }
			          });

			    // Display one countrie randomly
			    var sCountry = countriesTab[Math.floor(Math.random() * countriesTab.length)];
			    $("#countries").append("<p>"+sCountry+"</p>");

			    // Reset the text
			    $("#countryList").text("ROLL");

	    //
	}


	// Main code
	$("#countryList").click(getCountries);


}( jQuery ) );