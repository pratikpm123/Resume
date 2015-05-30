$(document).ready(function (){
	
  // create a LatLng object containing the coordinate for the center of the map
  var latlng = new google.maps.LatLng(23.063662, 72.531298);

  // prepare the map properties
  var options = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

  // initialize the map object
  var map = new google.maps.Map(document.getElementById('google_map'), options);

  // add Marker
  var marker1 = new google.maps.Marker({
    position: latlng, map: map
  });

  // add listener for a click on the pin
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow.open(map, marker1);
  });

  // add information window
  var infowindow = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>My address</strong><br><br>Ahmedabad, India.</div>'
  });  

  
});

$('#skills').waypoint(function() {
	
   // Create chart for skills
	$('.progress-pie-chart').each(function () {
		createChart(this);
		
	});
},{
			triggerOnce: true,
	        offset: '50%',  // middle of the page
			
	    });

function createChart(element){
				var start = 0;
				var end = $(element).data('percent');
				var time = 800; //in ms
				var fps = 30;

				var increment =((end-start)/time)*fps;

				$(element)[0].dataset.percent = start;

				var timer = setInterval(function() {
				  $(element)[0].dataset.percent = parseFloat($(element)[0].dataset.percent) + increment;

				  if (parseFloat($(element)[0].dataset.percent) >= end) {
					clearInterval(timer);
					$(element)[0].dataset.percent = end;
				  }

				  var $ppc = $(element),
					percent = parseFloat($ppc[0].dataset.percent),
					deg = 360 * percent / 100;
					
				  if (percent > 50) {
					$ppc.addClass('gt-50');
				  }
				  $('.ppc-progress-fill',element).css('transform', 'rotate(' + deg + 'deg)');
				  $('.ppc-percents span',element).html(parseInt(percent, 10)+"<sup>%</sup>");
				}, fps);
				  
}
$(window).load(function() {
     $('#loading').hide();
  });