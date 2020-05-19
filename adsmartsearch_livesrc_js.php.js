








function build_search_url(input_field) {

	var url = $('base').attr('href') + 'index.php?route=product/search';
	 
	var search = input_field.val();

	if (search) {
		url += '&search=' + encodeURIComponent(search) + '&sort=pd.name&order=ASC';
		
		location = url;
	}
}

$(document).ready(function() {



			

	
	/* Search */
	
		
	// 1)
	$('.button-search').unbind('click'); 
	
	// 2)	
		$('.button-search').bind('click').on('click', function(e) {	 	
	
	// 3)		
		$(this).unbind('click'); 
		
		var input_field = $(this).parent().find('input[name="search"], input[name="filter_search"]');
		build_search_url(input_field);
	});
	

		
	
	// 1)
		$('#search input[name=\'search\']').parent().find('button').off('click').unbind('click');
	
	// 2)
		$('#search input[name=\'search\']').parent().find('button').on('click', function() {
	
	// 3)
		$(this).off('click').unbind('click'); 	
		var input_field = $('#search input[name=\'search\']');
		build_search_url(input_field);			
	});

		
	$('.search_btn').on('click', function(e) {				

		var input_field = $(this).parent().find('input[name="adsmart_search"]');
		build_search_url(input_field);
	});

	
	$('input[name="adsmart_search"],input[name="search"], input[name="filter_search"]').on('keydown', function(e) {
		
		if (e.keyCode == 13) {
			build_search_url($(this));
		}		
	});

});


				

function isTouchSupported() {
	return (window.navigator.msMaxTouchPoints || ("ontouchstart" in document.documentElement) )? true: false;
}




!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};h.defaults={},f(h.prototype,{spin:function(b){this.stop();{var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});d.radius+d.length+d.width}if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h});
$(document).ready( function(){					
	spin_options = {lines: 9, length: 4, width: 2, radius: 3, rotate: 90,
	color: '#454545',
	speed: 2,trail: 45, shadow: false, hwaccel: false, className: 'spinner', zIndex: 9999999, /* left: 'auto' */ top: '14px' };
	spinner = new Spinner(spin_options);
});





;(function (factory)
{
	if (typeof define === 'function' && define.amd)
	{
		define(['jquery'], factory);
	}
	else if (typeof exports === 'object')
	{
		factory(require('jquery'));
	}
	else
	{
		factory(jQuery);
	}
}
(function ($)
{
	"use strict";

	var pluginName = "adsmart_scroll"
	,   defaults   =
		{
			axis         : 'y'    		,   wheel        : true   		,   wheelSpeed   : 40     		,   wheelLock    : true   		,   scrollInvert : false  		,   trackSize    : false  		,   thumbSize    : false  		}
	;

	function Plugin($container, options)
	{
		this.options   = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name     = pluginName;

		$container.children('.viewport').prepend('<div class="scrollbar"><div class="track"><div class="src_lst_up">&#9650;</div><div class="thumb"></div><div class="src_lst_down">&#9660;</div></div></div>');	
				
		
		var self        = this
		,   $viewport   = $container.find(".viewport")
		,   $overview   = $container.find("ul")
		,   $scrollbar  = $container.find(".scrollbar")
		,   $track      = $scrollbar.find(".track")
		,   $thumb      = $scrollbar.find(".thumb")

		,   mousePosition  = 0

		,   isHorizontal   = this.options.axis === 'x'
		,   hasTouchEvents = ("ontouchstart" in document.documentElement)
		,   wheelEvent     = ("onwheel" in document || document.documentMode >= 9) ? "wheel" :
							 (document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll")

		,   sizeLabel  = isHorizontal ? "width" : "height"
		,	widthLabel = !isHorizontal ? "width" : "height"
		,   posiLabel  = isHorizontal ? "left" : "top"
		;

		this.contentPosition = 0;
		this.viewportSize    = 0;
		this.contentSize     = 0;
		this.contentRatio    = 0;
		this.trackSize       = 0;
		this.trackRatio      = 0;
		this.thumbSize       = 0;
		this.thumbPosition   = 0;
		
		this.scrollbarWidth = 15;
		
		this.currentPos		= 0;
		this.timeout_id		= 0;
		

		function initialize()
		{
			self.update();
			setEvents();
			self.update('relative'); // update again to fix a height problem with the 
									 // content, this.contentSize height in some cases (when product names 
									 // didn't fit in one line) was smaller than the actual height and products
									 // on bottom failed to display in the viewport
			return self;
		}

		this.update = function(scrollTo)
		{
			var sizeLabelCap  = sizeLabel.charAt(0).toUpperCase() + sizeLabel.slice(1).toLowerCase();

			this.viewportSize = $viewport[0]['offset'+ sizeLabelCap];
			this.contentSize  = $overview[0]['scroll'+ sizeLabelCap];
		
			this.contentRatio = this.viewportSize / this.contentSize;
			this.trackSize    = this.options.trackSize || this.viewportSize;
			
			if ( this.trackSize > 100 ){
				this.thumbSize    = Math.min(this.trackSize, Math.max(0, (this.options.thumbSize || (this.trackSize * this.contentRatio))));
			} else {
				this.thumbSize = 40;
				this.options.thumbSize = this.thumbSize;
			}
		
			this.trackRatio   = this.options.thumbSize ? (this.contentSize - this.viewportSize) / (this.trackSize - this.thumbSize) : (this.contentSize / this.trackSize);
			this.trackRatio   = this.trackRatio;


			mousePosition     = $track.offset().top;

			$scrollbar.toggleClass("disable", this.contentRatio >= 1);
			
			switch (scrollTo)  {
			
				case "bottom":
					this.contentPosition = this.contentSize - this.viewportSize;
					break;

				case "relative":
					this.contentPosition = Math.min(Math.max(this.contentSize - this.viewportSize, 0), Math.max(0, this.contentPosition));
					break;

				default:
					this.contentPosition = parseInt(scrollTo, 10) || 0;
			}

			setSize();
			
			if ( !$scrollbar.hasClass('disable')){

				$overview.css('padding-right',(this.scrollbarWidth+5) + 'px' );
			}

			return self;
		};

		function setSize()
		{
			$thumb.css(posiLabel, self.contentPosition / self.trackRatio);
			$overview.css(posiLabel, -self.contentPosition);
			$scrollbar.css(sizeLabel, self.trackSize);
			$scrollbar.css(widthLabel, self.scrollbarWidth);
			$track.css(sizeLabel, self.trackSize);
			$thumb.css(sizeLabel, self.thumbSize);
		}

		
		function setEvents()
		{
						
			if(hasTouchEvents)
			{
			
				$viewport[0].ontouchstart = function(event)
				{
					if (1 === event.touches.length)
					{
				//		event.preventDefault(); 
				//      event.returnValue = false;
						event.stopPropagation();
								
						start(event.touches[0]);
					}
				};
			}
			else
			{
				$thumb.bind("mousedown", start);
				$track.bind("mousedown", drag);
			}

			$(window).resize(function()
			{
				self.update("relative");
			});

			if(self.options.wheel && window.addEventListener)
			{
				$container[0].addEventListener(wheelEvent, wheel, false );
			}
			else if(self.options.wheel)
			{
				$container[0].onmousewheel = wheel;
			}
		}

		function start(event)
		{
			$("body").addClass("noSelect");
			
			mousePosition      = isHorizontal ? event.pageX : event.pageY;
			self.thumbPosition = parseInt($thumb.css(posiLabel), 10) || 0;

			if(hasTouchEvents)
			{
				document.ontouchmove = function(event)
				{
					event.preventDefault(); 
					
			//		event.stopPropagation();
			//		event.returnValue = false; 
					
					drag(event.touches[0]);	
				};
				document.ontouchend = end;
			}
			else
			{
				$(document).bind("mousemove", drag);
				$(document).bind("mouseup", end);
				$thumb.bind("mouseup", end);
			}
		}
		

		
		function wheel(event) {
		
			if(self.contentRatio < 1) {
			
			
				var evntObj		= event || window.event;
				var deltaDir	= "delta" + self.options.axis.toUpperCase();
				var deltaVal	= (evntObj[deltaDir] || evntObj.detail || (-1 / 3 * evntObj.wheelDelta));
				
				var deltaSign 	= deltaVal ? deltaVal < 0 ? -1 : 1 : 0;
				var wheelSpeedDelta = -(deltaSign);

				self.contentPosition -= wheelSpeedDelta * self.options.wheelSpeed;
				
				self.contentPosition = Math.min((self.contentSize - self.viewportSize), Math.max(0, self.contentPosition));

			   $container.trigger("move");
			   
					
				
				scroll(deltaSign);
				
				if(self.options.wheelLock || (self.contentPosition !== (self.contentSize - self.viewportSize) && self.contentPosition !== 0) )
				{
					evntObj = $.event.fix(evntObj);
					evntObj.preventDefault();	
				}
	
			}
		}

		
		function scroll(direction) {
				
						window.clearTimeout(self.timeout_id);

						if ( ( self.currentPos <= 0 && direction > 0 ) || ( self.currentPos > 0 && (self.currentPos + self.viewportSize) < self.contentSize )  ||  ( self.currentPos > 0 && ( (self.currentPos + self.viewportSize) >= self.contentSize && direction < 0 ) ) ) { 
			
								(function theLoop () {
										self.currentPos += direction * 4;

					self.timeout_id = setTimeout(function () {

						$('.timeout_id').html('timeout_id: ' + self.timeout_id);
												if ( ( (~~self.currentPos) - (~~self.contentPosition ) <0 && direction > 0 ) || ( (~~self.currentPos) - (~~self.contentPosition ) >0 && direction < 0 ) )  { 

						
							$overview.css( posiLabel, -self.currentPos );
							$thumb.css( posiLabel, self.currentPos / self.trackRatio  );

							theLoop(); 
						
						}
						else {
							self.currentPos = self.contentPosition;
						}
													
					}, 1); 
				})();
			}
		}
		

		function drag(event) {

			if(self.contentRatio < 1) {
			
				var mousePositionNew   = isHorizontal ? event.pageX : event.pageY
				,   thumbPositionDelta = mousePositionNew - mousePosition
				;

				if(self.options.scrollInvert && hasTouchEvents)
				{
					thumbPositionDelta = mousePosition - mousePositionNew;
				}

				var thumbPositionNew = Math.min((self.trackSize - self.thumbSize), Math.max(0, self.thumbPosition + thumbPositionDelta));  
				self.contentPosition = thumbPositionNew * self.trackRatio;
			
				self.currentPos = self.contentPosition;
				
				$container.trigger("move");

				$thumb.css(posiLabel, thumbPositionNew);
				$overview.css(posiLabel, -self.contentPosition);
							
			}	
		}

		function end()
		{
			$("body").removeClass("noSelect");
			$(document).unbind("mousemove", drag);
			$(document).unbind("mouseup", end);
			$thumb.unbind("mouseup", end);
			document.ontouchmove = document.ontouchend = null;
		}
		return initialize();
	}

	$.fn[pluginName] = function(options)
	{
		return this.each(function()
		{
			if(!$.data(this, "plugin_" + pluginName))
			{
				$.data(this, "plugin_" + pluginName, new Plugin($(this), options));
			}
		});
	};
}));



$(document).ready(function() {

	
	
	search_inputs = new Array();

	var i=0;
	search_inputs[i] = $('#header input[name="filter_name"]');
	
	if ($(search_inputs[i]).length <= 0) { 							search_inputs[i] = $('input[name="filter_name"]');		}
	
	if ($(search_inputs[i]).length > 0){ 							i=1;
	}
	else {
		i=0;
	}
	

	search_inputs[i] = $('#header input[name="search"]');
	
	if ($(search_inputs[i]).length <= 0) { 
		search_inputs[i] = $('input[name="search"]');
	}
	
		
					
	if ($(search_inputs[i]).length <= 0) {
		search_inputs.splice(i, 1);
	}
	

		
	var search_inputs_length = search_inputs.length;
	for (var i=0; i < search_inputs_length; i++) {

				search_field_to_exclude = $('body').find($('select[name="filter_category_id"]')).siblings(search_inputs[i]);
		
				if ($(search_field_to_exclude).length <= 0) { 
		
			search_field_to_exclude = $('body').find($('select[name="category_id"]')).siblings($('input[name="search"]')).add('#input-search');
		}

		search_inputs[i] = search_inputs[i].not(search_field_to_exclude);
	}
	

	
	
		$('input[id^="adsmart_search"]').each(function() {
		search_inputs.push($(this));
	});
	
	
	space_or_typing = false; 	
		typing_speed			= 250;					max_sleep_time			= 1000;					keypress_elapsed_time	= 0;
	elapsed_time_for_new_keypress_sequence = 0; 	timeout = 100;
	
	ajax_request = null;

	max_waiting_time = 3000; 									

	

		

		search_inputs_length = search_inputs.length;
	for (var i=0; i < search_inputs_length; i++) {

		search_inputs[i].attr('autocomplete','off');
	
	
		search_inputs[i].after('<div class="adsmart_container"></div>');
	
				search_inputs[i].on('keyup input', function(e) {
		
			var search_string = $(this).val();
			
			if (space_or_typing == false) {
				space_or_typing = true;
				keypress_start_time = new Date().getTime();
			}

			keypress_elapsed_time = new Date().getTime() - keypress_start_time;  // time between two consecutive key presses

			elapsed_time_for_new_keypress_sequence +=  keypress_elapsed_time;
				
			keypress_start_time = new Date().getTime();
			
			 
			
			
			if ( keypress_elapsed_time < typing_speed  ) {
			
				if ( elapsed_time_for_new_keypress_sequence > max_sleep_time){
					timeout = 0;
					elapsed_time_for_new_keypress_sequence = 0;
				}
				else {					
					timeout = typing_speed;
					clearTimeout(ajax_request);
				}
			}
			
						if ( search_string.substr(search_string.length - 1,1) == ' ' || (search_string.substr(search_string.length - 1,1) == ' ' && e.which  == 8) || search_string.length == 0  ) {
		
				// Stop the spinner:
				spinner.stop();

								if (search_string.length == 0 && $(this).next('.adsmart_container').is(":visible") ) {
					$(this).next('.adsmart_container').hide();
				}
			}
			else 
			 {

				adsmart_search($(this), search_string);
			}
		});
			
	}
});

	
	


function adsmart_search(search_input, search_string) {

	currentSearchInput	= search_input; 	adsmart_container		= currentSearchInput.next('.adsmart_container');

		default_parent_overflow = currentSearchInput.parent().css('overflow');
	default_parent_zindex 	= currentSearchInput.parent().css('z-index');
	
	currentSearchInput.parent().css('overflow','visible');
	currentSearchInput.parent().css('z-index','9999');
	
	
		spinner.spin();
	$('div.adsmart_loading').html(spinner.el);

	
	ajax_request = setTimeout(function() {
	
		xhr = $.ajax({

							url: 'https://www.nafarrate.com/index.php?route=product/search/autocomplete&filter_name=' + encodeURIComponent(search_string),
			
			dataType: 'json',

			beforeSend: function() {
				
								if ($.active > 1 ) {	
					xhr.abort();
				}
			},
			
			success: function(json) {
			
				// Stop the spinner:
				spinner.stop();
				
				$('.adsmart_loading').remove();
				
								
				
				adsmart_container.show();

				
								adsmart_container.html('<div class="adsmart_search"><div class="viewport"><ul></ul></div></div>');
				
				adsmartSearchDIV 		= adsmart_container.find('.adsmart_search');

				if (json.length > 0) {

					 $.each(json, function (key, data) {
					 
												 
						 						data['href'] = $('<b></b>').html(data['href']).text();
						 
						
						
						 
						 
						 
												var price;
						if (data['special'] != '') {
							price = '<s>'+data['price']+'</s><br />' + data['special']; 
						}
						else {
							price = data['price'];
						}
						
												
						
												adsmartSearchDIV.find('ul').append('<li class="menu_item"><a class="item_link" href="'+data['href']+'"><div class="image"><img src="' + data['image'] + '"></div><div class="name">'+data['name']+'</div><div class="price">' + price + '</div></a></li>');
					});

					 
					if ( adsmart_container.find('.no_results').length == 0 ){
					
						adsmartSearchDIV.prepend($('<div class="adsmart_info_msg" ><div class="adsmart_loading" ></div></div>'));

					
						var text = "Show all results";

												
							adsmartSearchDIV.append('<div class="show_all_results"><a onclick="javascript:show_all_results_href = this.href" href="https://www.nafarrate.com/index.php?route=product/search&search=' + encodeURIComponent(search_string) + '&sort=pd.name&order=ASC">' + text + '</a></div>');					

											}
					
					

										$('.adsmart_search li.menu_item').mouseover(function() {
						$('.adsmart_search li').removeClass('lastfocus');
						$('.adsmart_search li:not(.show_all_results)').css('background','transparent');
						$(this).addClass('lastfocus');
						
						
											});

                    $('.adsmart_search li.menu_item').click(function(e) {
                        e.preventDefault();
                        var name = $(this).find('.name').text();
                        var link = $(this).find('a.item_link').attr('href');
                        var url = $('base').attr('href') + "index.php?route=module/adsmart_search/addKeyphraseHistory";

                        $.post( url, {name: name}, function() {
                            $(location).attr('href',link);
                        });
                    });
				}

								else {
				
					var text = "No results";

					adsmartSearchDIV.append('<div class="adsmart_info_msg no_results">' + text + '</div>' );
				}
				

				
				mouse_inside = false;
				adsmartSearchDIV.mouseenter(function(){
				
					clearTimeout($(this).data('timeout_id'));
					$(this).fadeTo( "fast" , 1.0);
					mouse_inside = true;
				});
				
				
				adsmartSearchDIV.parent().prev().mouseover(function(){ 	
					adsmartSearchDIV.fadeTo( "fast" , 1.0, function(){
						clearTimeout(adsmartSearchDIV.data('timeout_id'));
					});
				});
				

				adsmartSearchDIV.mouseleave(function(){
				
					mouse_inside = false;
				
					var that = $(this),
						timeout_id = setTimeout(function(){
							that.fadeTo( "fast" , 0.85);
							
						}, 2000);
										that.data('timeout_id', timeout_id); 
				});
				
	
				
				
				$('body').mousedown( function() {					
					
										
					if (mouse_inside == false) {

						close_adsmart_search(currentSearchInput);
					}	
										
				});
				

								set_dropdown_width(currentSearchInput);
				

								
				var viewportULHeight		= adsmartSearchDIV.find('ul').outerHeight(true);
				var infoMsgShowAllHeight	= adsmartSearchDIV.find('.adsmart_info_msg').outerHeight() + adsmartSearchDIV.find('.show_all_results').outerHeight();
				var actualHeight 			= viewportULHeight + infoMsgShowAllHeight ;
				
				
				if ( isTouchSupported() ||  $(window).width() < 768 ) {
					adsmartSearchDIV.removeClass('scroll');	
				}
				else {
				
					if ( adsmartSearchDIV.offset().top + actualHeight > $(window).height() ) {
					
						var h1 = $(window).height() - adsmartSearchDIV.offset().top + $('html, body').scrollTop() - infoMsgShowAllHeight;
						
												if (h1 > 40) { 					
							adsmartSearchDIV.find('.viewport').height( Math.min(h1, viewportULHeight));	
						} else {
							adsmartSearchDIV.find('.viewport').height( viewportULHeight );
						}	

												adsmartSearchDIV.adsmart_scroll();	
					}		
					else {					
						adsmartSearchDIV.find('.viewport').height( viewportULHeight );
					}
					
										adsmartSearchDIV.addClass('scroll');
				}
				
				
								set_dropdown_position(currentSearchInput);
				

										
			}
		});	
	
		space_or_typing = false; 
		
	}, timeout);
}


function close_adsmart_search(search_input) {

		if ( typeof default_parent_overflow !== 'undefined' ) {
		search_input.parent().css('overflow', default_parent_overflow);
	}
	if ( typeof default_parent_zindex !== 'undefined' ) {
		search_input.parent().css('z-index', default_parent_zindex);
	}	
																																										
	currentSearchInput.next('.adsmart_container').css('display', 'none');		
}


function set_dropdown_position(search_input) {
		
	
	var dropdown_top = 2;
	
	if ( search_input.css('float') == 'left' || search_input.css('float') == 'right' || search_input.css('position') == "absolute" ){
		dropdown_top += search_input.outerHeight(false);
	}
	
	if ( (search_input.css('position') == "relative" || search_input.css('position') == "absolute") && search_input.css('top')  ){
		dropdown_top += search_input.position().top;
	}

	search_input.next('.adsmart_container').css({ top:dropdown_top});


		
	var dropdown = search_input.next('.adsmart_container').children('.adsmart_search');
	var scrollbar_width = ($('.scrollbar').width())?  $('.scrollbar').width() : 0;
	var dropdown_width = dropdown.width() + scrollbar_width;

	
		
		var extra_width = dropdown.width() - search_input.width();
	extra_width = (extra_width > 0)? extra_width : 0;


		if ( $(window).width() - (search_input.offset().left + dropdown_width) > 0 ){
		dropdown.css('left','0px').css('right', 'auto');
	}
	else{
		if (dropdown.css('position') == 'absolute'){
			dropdown.css('left','auto').css('right', '0px');
		}
		
		if (dropdown.css('position') == 'relative'){
			dropdown.css('left','auto').css('right', extra_width + 'px');	
		}
	}
}

	
function set_dropdown_width(search_input) {

	var adsmart_container	= search_input.next('.adsmart_container');
	var	adsmartSearchDIV 	= adsmart_container.find('.adsmart_search');
	
	
	if ( $(window).width() < 768  && adsmart_container.width() > adsmartSearchDIV.width() ) {	
		adsmartSearchDIV.css('width', 'auto');	
	}
	else {
		adsmartSearchDIV.css('width', '340px');
	}
}	


