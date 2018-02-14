// JavaScript Document
jQuery(document).ready(function($) {
	// set a baseurl for the dev server so the search works properly
	function getBaseURL () {
		var baseURL = "";
		var baseDocument = "index.shtml";
	
		if (document.getElementsByTagName('base').length > 0) {
			baseURL = document.getElementsByTagName('base')[0].href.replace(baseDocument, "");
		} else {
			baseURL = location.protocol + "//" + location.hostname + (location.port && ":" + location.port) + "/";
		}
	
		return baseURL;
	}
	if(location.hostname.indexOf("csweb01") != -1){
		var thisBase = "http://csweb01.nw.nos.boeing.com/csdev/barrett/new-employee/";
	}
	else
	{
		thisBase = getBaseURL();	
	}
    /////////////////////////////////////////////////////////
    //  XS VIEW SEARCH BAR
    /////////////////////////////////////////////////////////
    // the title text and the input fill the same space. 
    // JQuery is used to hide the input / show input based 
    // on customer toggle of the search icon. 
    $("#xs-title-text").show();
    $("#xs-search-term-input, .xs-search-btn").hide();
    $("#xs-search-button").on("click", function() {
        $("#xs-search-term-input, .xs-search-btn, #xs-title-text").toggle();
        // by adding / removing this class, the color of the search icon
        //  can be changed dynamically using background color changes in the css
        $(this).toggleClass('active');
    });
	
	// autocomplete search
	if($(".srch-term")[0] && typeof source != "undefined"){
		$(".srch-term").autocomplete({
			source: source,
			focus: function( event, ui ) {
				$(".srch-term").val(ui.item.label);
				return false;
			},
			position: { my : "right top", at: "right bottom" },
			select: function( event, ui ) { 
			//console.log($("#srch-term").val());
				$(".srch-term").val(ui.item.label);
				//window.location.href = ui.item.value;
				if(ui.item.value.indexOf("http") != -1){
					window.open(ui.item.value,'_blank');
				}
				else{
					window.location.href = thisBase + ui.item.value;
				}
				return false;
			}
		});
	}
	
	// randomly pick a background image for the hero on load
	var heroImages = [
		{image:'hero_plane_nose.jpg',caption:'Meet the 747-8I'},
		{image:'hero_apache.jpg', caption: 'Meet the AH-64 Apache'},
		{image:'hero_space2.jpg', caption: 'Meet the CST-100'}
	];
	//{image:'hero_jet.jpg', caption: ''}
	var randomHero = Math.floor(Math.random() * heroImages.length);
    $('#random-hero').css({'background-image': 'url(common/img/' + heroImages[randomHero].image + ')'});
	$('#random-caption').text(heroImages[randomHero].caption);
	
	
	// randomly pick a featured item on load
	var featuredItems = [
		{image:'featured-help-desk7.png',title:'<p><strong>Enterprise Help Desk</strong><br>If you have trouble with your computer, password, badge, or Boeing phone that you can\'t resolve using self-help, the EHD is here to get you back on track.</p><p><a href="get-started/enterprise-help-desk.shtml">Learn More</a></p>',pos:'center right',size:'full'},
		{image:'featured-secure-badge2.png', title: '<p><strong>SecureBadge</strong><br>Your SecureBadge is crucial for logon identification and access to all Boeing sites. Learn how it protects our resources and keeps us safe.</p><p><a href="get-started/secure-badge.shtml">Learn More</a></p>',pos:'center right',size:'full'},
		{image:'featured-time2.png', title: '<p><strong>Employee Timekeeping System</strong><br>ETS records your daily work hours and absences to ensure that you are accurately paid. Enter your daily hours and sign your weekly time here.</p><p><a href="get-started/employee-time-keeping.shtml">Learn More</a></p>',pos:'center left',size:'cover'},
		{image:'featured-total-access2.png', title: '<p><strong>TotalAccess</strong><br>This is your secure, personalized resource center for all things related to your life at Boeing, including compensation, perks, learning and development opportunities, and more.</p><p><a href="get-started/totalaccess.shtml">Learn More</a></p>',pos:'center right',size:'full'},
		{image:'featured-total-comp3.png', title: '<p><strong>Total Compensation</strong><br>Your paycheck is only one part of your Boeing compensation. Go here to find out more about your health and wellness benefits, recognition, and more. It all adds up.</p><p><a href="get-started/total-compensation.shtml">Learn More</a></p>',pos:'center center',size:'full'}
	];
	var randomFeature = Math.floor(Math.random() * featuredItems.length);
    $('.featured-image').css({'background-image': 'url(common/img/' + featuredItems[randomFeature].image + ')', 'background-position': featuredItems[randomFeature].pos});
	$('.featured-image').addClass(featuredItems[randomFeature].size);
	if($('#random-featured-text')[0]){
		$('#random-featured-text').html(featuredItems[randomFeature].title);
	}
	
	var pathArray = window.location.pathname.split( '/' );
	var host = window.location.host;
	if(host.indexOf('loc-new-employee') != -1){
		var pathCheck = pathArray[1];	
	}
	else
	{
		pathCheck = pathArray[4];	
	}
	switch(pathCheck){
		case "index.shtml":
		$('#mainnav1').addClass('active');
		//$('#nav-inline-search, #nav-inline-search-icon').addClass('hidden');
		break;
		case "get-started":
		$('#mainnav2').addClass('active');
		break;
		case "get-informed":
		$('#mainnav3').addClass('active');
		break;
		case "get-connected":
		$('#mainnav4').addClass('active');
		break;
		case "get-growing":
		$('#mainnav5').addClass('active');
		break;
	}
	
	$('.collapse').on('show.bs.collapse', function(){
		//$(this).parent().find(".zmdi-caret-right").removeClass("zmdi-caret-right").addClass("zmdi-caret-down");
		$(this).parent().find(".arrow-right").addClass("down");
	}).on('hide.bs.collapse', function(){
		//$(this).parent().find(".zmdi-caret-down").removeClass("zmdi-caret-down").addClass("zmdi-caret-right");
		$(this).parent().find(".arrow-right").removeClass("down");
	});
	
	/*
     * Lightbox
     */
    if ($('.lightbox')[0]) {
        $('.lightbox').lightGallery({
            enableTouch: true,
			loop:true,
			closable:true
        });
    }
	
	$('[data-toggle="popover"]').popover();
});