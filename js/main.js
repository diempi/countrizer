/*
	Script for Countrizer App 
	Author: Didier A. E. Gabiam a.k.a DIEMPI
	Date: 05-28-2015
*/

// Variables 
var countriesTab = [];

// Methods
function getCountries(){
	$.getJSON('https://restcountries.eu/rest/v1/all');
	console.log(data);
}

