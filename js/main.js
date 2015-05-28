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
	var sApiUrl = 'https://restcountries.eu/rest/v1/all';

	// Methods
	function getCountries(){
	      $.ajax({
	            url: sApiUrl,
	            type: 'GET',
	            async: false,
        		dataType: 'json',
	            success: function(data){

	                 var aCountriesData = data,
	                 countriesTab = [];
	                 for (var i = 0; i < aCountriesData.length; i++) {
	                 	countriesTab[i] = aCountriesData[i].name;
	                 }
	                //$("#countries").append(countriesTab);
	            }
	          });
	}


	// Main code
	$("#countryList").click(getCountries);


}( jQuery ) );