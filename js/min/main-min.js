!function($){"use strict";function t(){$("#countries").children("p").remove(),$("#countryList").text("ROLLING..."),$.ajax({url:e,type:"GET",async:!1,dataType:"json",success:function(t){for(var e=t,r=0;r<e.length;r++)n[r]=e[r].name}});var t=n[Math.floor(Math.random()*n.length)];$("#countries").append("<p>"+t+"</p>"),$("#countryList").text("ROLL")}var e="https://restcountries.eu/rest/v1/all",n=[];$("#countryList").click(t)}(jQuery);