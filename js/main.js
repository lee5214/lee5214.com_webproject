
	/*header title fade in*/
	'use strict';
	$(document).ready(function() {//first page text
	    $(".pageTitle").fadeIn(4000);
		$(".pageMid").fadeIn(9000);
	});

	$(document).ready(function(){
		$("#bg").css('background-image','url(img/bgimg/bg'+Math.floor(Math.random()*24+1)+'.jpg)');
		setInterval(function(){
			var ran=Math.floor(Math.random()*24+1);
			$("#bg").fadeOut(4000,function(){
				$(this).css('background-image','url(img/bgimg/bg'+ran+'.jpg)' ).fadeIn(2000);
			});	
		},12000);

	});
		
		$(document).ready(function () {
		  var $wrap = $('.wrapper'), pages = $('.page').length, 
			scrolling = false, currentPage = 1, $navPanel = $('.nav-panel'), 
			$scrollBtn = $('.scroll-btn'), $navBtn = $('.nav-btn');
		    function manageClasses() {
		        $wrap.removeClass(function (index, css) {
		            return (css.match(/(^|\s)active-page\S+/g) || []).join(' ');
		        });
		        $wrap.addClass('active-page' + currentPage);
		        $navBtn.removeClass('active');
		        $('.nav-btn.nav-page' + currentPage).addClass('active');
		        $navPanel.addClass('invisible');
		        scrolling = true;
		        setTimeout(function () {
		            $navPanel.removeClass('invisible');
		            scrolling = false;
		        }, 1000);
		    }
		    function navigateUp() {
		        if (currentPage > 1) {
		            currentPage--;
		            if (Modernizr.csstransforms) {
		                manageClasses();
		            } else {
		                $wrap.animate({ 'top': '-' + (currentPage - 1) * 100 + '%' }, 1000);
		            }
		        }
		    }
		    function navigateDown() {
		        if (currentPage < pages) {
		            currentPage++;
		            if (Modernizr.csstransforms) {
		                manageClasses();
		            } else {
		                $wrap.animate({ 'top': '-' + (currentPage - 1) * 100 + '%' }, 1000);
		            }
		        }
		    }
		    $(document).on('mousewheel DOMMouseScroll', function (e) {
		        if (!scrolling) {
		            if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
		                navigateUp();
		            } else {
		                navigateDown();
		            }
		        }
		    });
		    $(document).on('click', '.scroll-btn', function () {
		        if ($(this).hasClass('up')) {
		            navigateUp();
		        } else {
		            navigateDown();
		        }
		    });
		    $(document).on('click', '.nav-btn:not(.active)', function () {
		        if (!scrolling) {
		            var target = $(this).attr('data-target');
		            if (Modernizr.csstransforms) {
		                $wrap.removeClass(function (index, css) {
		                    return (css.match(/(^|\s)active-page\S+/g) || []).join(' ');
		                });
		                $wrap.addClass('active-page' + target);
		                $navBtn.removeClass('active');
		                $(this).addClass('active');
		                $navPanel.addClass('invisible');
		                currentPage = target;
		                scrolling = true;
		                setTimeout(function () {
		                    $navPanel.removeClass('invisible');
		                    scrolling = false;
		                }, 1000);
		            } else {
		                $wrap.animate({ 'top': '-' + (target - 1) * 100 + '%' }, 1000);
		            }
		        }
		    });
		});

	jQuery(document).ready(function($){
		//open navigation clicking the menu icon
		$('.cd-nav-trigger').on('click', function(event){
			event.preventDefault();
			toggleNav(true);
		});
		//close the navigation
		$('.cd-close-nav, .cd-overlay').on('click', function(event){
			event.preventDefault();
			toggleNav(false);
		});
		//select a new section
		/*$('.cd-nav li').on('click', function(event){
			event.preventDefault();
			var target = $(this),
				//detect which section user has chosen
				sectionTarget = target.data('menu');
			if( !target.hasClass('cd-selected') ) {
				//if user has selected a section different from the one alredy visible
				//update the navigation -> assign the .cd-selected class to the selected item
				target.addClass('cd-selected').siblings('.cd-selected').removeClass('cd-selected');
				//load the new section
				//loadNewContent(sectionTarget);
			} else {
				// otherwise close navigation
				toggleNav(false);
			}
		});*/

		function toggleNav(bool) {
			$('.cd-nav-container, .cd-overlay').toggleClass('is-visible', bool);
			$('main').toggleClass('scale-down', bool);
		}

		/*function loadNewContent(newSection) {
			//create a new section element and insert it into the DOM
			var section = $('<section class="cd-section '+newSection+'"></section>').appendTo($('main'));
			//load the new content from the proper html file
			section.load(newSection+'.html .cd-section > *', function(event){
				//add the .cd-selected to the new section element -> it will cover the old one
				section.addClass('cd-selected').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					//close navigation
					toggleNav(false);
				});
				section.prev('.cd-selected').removeClass('cd-selected');
			});

			$('main').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//once the navigation is closed, remove the old section from the DOM
				section.prev('.cd-section').remove();
			});

			if( $('.no-csstransitions').length > 0 ) {
				//if browser doesn't support transitions - don't wait but close navigation and remove old item
				toggleNav(false);
				section.prev('.cd-section').remove();
			}
		}*/
	});