(function ($) {
    "use strict";
    
    
    
    // One Page Nav
    var top_offset = $('.header-area').height() - 0;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });
    
    
    
    
    
    
    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 1) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });
    
    
    /* counter */
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    
    /* screenshots-active */
    $('.screenshots-active').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1,
                dots:false
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    })
    
    
    /* testimonial-active */
    $('.testimonial-active').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    
    
    
    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
    
    // WOW active
    new WOW().init();
    
    
    //show beta popup   
    
    $("#btnBeta").on("click", function(e){
        e.preventDefault();
        $("#exampleModal").modal("show");
        
        $("#beta-form").show();
        $("#beta-tester-msg").hide();
        $("#btnBeta-submit").show();
    });
    
    
    $("#btnContact-submit").on("click", function(){
        var message = "Name: <strong>" + $("#contact-name").val() + "</strong><br>";
        message += "Email: <strong>" + $("#contact-email").val() + "</strong><br>";
        // message += "Phone: <strong>" + $("#contact-phone").val() + "</strong><br>";
        message += "Message: <strong>" + $("#contact-message").val() + "</strong><br>";
    
        var data = {
            "senderName": "Nimble Lingo",
            "senderEmailAddress" : "contactus@nimblelingo.com",
            "destinationName": "Nimble Lingo",
            "destinationEmailAddress" : "contactus@nimblelingo.com",
            "subject" : "Contact Form: Nimble Lingo Website",
            "body": message
          };
    
          var form = $(this).closest("form");

        var settings = {
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function(){
                form[0].reset();
                $("#contact-confirm").show();
            },
            error: function(xhr){
                console.log(xhr);
            } 
        }
        $.ajax("https://api.nimblelingo.com/email",settings);
    });
    
    $("#btnBeta-submit").on("click", function(){

        var data = {
            firstName: $("#beta-firstname").val(),
            lastName: $("#beta-lastname").val(),
            organization: $("#beta-organization").val(),
            email: $("#beta-email").val()
        };


        var settings = {
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function(){
                $("#beta-form")[0].reset();
            
                $("#beta-form").hide();
                $("#beta-tester-msg").show();
                $("#btnBeta-submit").hide();
            },
            error: function(xhr){
                console.log(xhr);
            } 
        }
        $.ajax("https://api.nimblelingo.com/email/tester",settings);
    });
    
    
    })(jQuery);