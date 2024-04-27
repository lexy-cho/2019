$(document).ready(function(){
	 $('.firstGnb>li>span strong').click(function () {
			$('.firstGnb ul li').removeClass('on');
			$('.firstGnb>li').removeClass('on');
			$('.gnb ul li ul').slideUp();
			$(this).parents('li').addClass('on');
			return false;
		}); // gnb list click
		
	$('.firstGnb li.snbCase>span strong').click(function () {
		$(this).parents('span').siblings('ul').slideDown();
		$('.gnb ul li ul li:first-child').addClass('on');
		return false;
	}); // gnb ow rank menu

	$(".tab-con").hide();
	$(".tab-con:first").show();
	$(".tab span input").click(function () {
		$(".tab span").removeClass("on");
		$(this).parent("span").addClass("on");
		$(".tab-con").hide();
		var activeTab = $(this).attr("data-name");
		$("." + activeTab).fadeIn();
	});

	 $('.btnCal').duDatepicker({
		 format: 'yyyy-mm-dd', // Determines the date format
		  theme: 'blue',        // Determines the color theme of the date picker
		  readOnly: false,       // Determines if input element is readonly (key input is disabled)
		  clearBtn: false,      // Determines if Clear button is displayed
		  cancelBtn: false,     // Determines if Cancel button is displayed
		  overlayClose: true    // Determines if clicking the overlay will close the date picker
	 });	// Datepicker 2018-03-27 format / 2018-03-02 
	 	
	var select = $(".selectSet select");
	select.change(function(){
		var select_name = $(this).children("option:selected").text();
		$(this).siblings("strong").text(select_name);
	});
	for (i=0; i<$(".selectSet select").length; i++){
		var select_ = $(".selectSet select").get(i);
		if($(select_).is(":disabled")) $(select_).siblings('strong').css('opacity','0.5');
	} // select disabled opacity
});