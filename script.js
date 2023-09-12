$(document).ready(function() {
    $(window).scroll(function(event) {
        var top = $(window).scrollTop();
        console.log(top);
        if (top > 20) {
            console.log("Removing");
            $("#navbar-menu").removeClass("text-white");
            $("#navbar-menu").addClass("bg-white");
            $("#navbar-menu").addClass("border-2");

        }
        if (top === 0) {
            $("#navbar-menu").removeClass("text-black");
            $("#navbar-menu").removeClass("bg-white");
            $("#navbar-menu").removeClass("border-2");
        }
    });

    $("#mb-menu").click(function() {
        $("#mb-menu-list").toggle("slide");
        $("#close-icon").toggleClass("hidden");
        $("#menu-icon").toggleClass("hidden");
    })

    $("#abt-menu-icon").click(function() {
        $("#abt-submenu").toggle("slide");
    })

    $("#what-menu-icon").click(function() {
        $("#what-submenu").toggle("slide");
    })


    var $carouselItems = $('.carousel-item');
    var currentIndex = 0;

    function showImage(index) {
        $carouselItems.removeClass('active');
        $carouselItems.eq(index).addClass('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % $carouselItems.length;
        showImage(currentIndex);
    }

    // Show the first image initially
    showImage(currentIndex);

    // Set interval to switch images every 5 seconds
    setInterval(nextImage, 5000);



    $(".slider").slick({
        fade: true,
        dots: true, // Show dots for navigation
        infinite: true, // Enable infinite loop
        speed: 1000, // Transition speed in milliseconds
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000, // Autoplay speed in milliseconds
        cssEase: 'linear',
        responsive: [{
                breakpoint: 768, // Breakpoint for responsive settings
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            // Add more breakpoints and settings as needed
        ]
    });
});