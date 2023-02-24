(function () {
  ("use strict");

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  var fullHeight = function () {
    let height = $(window).height();
    if($(window).height() < 420) {
      height = 420;
    }
    $(".js-fullheight").css("height", height);
    $(window).resize(function () {
      $(".js-fullheight").css("height", height);
    });
  };

  // Parallax
  var parallax = function () {
    $(window).stellar();
  };

  var contentWayPoint = function () {
    var i = 0;
    $(".animate-box").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("animated-fast")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn animated-fast");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft animated-fast");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight animated-fast");
                  } else {
                    el.addClass("fadeInUp animated-fast");
                  }

                  el.removeClass("item-animate");
                },
                k * 100,
                "easeInOutExpo"
              );
            });
          }, 50);
        }
      },
      { offset: "85%" }
    );
  };

  var goToTop = function () {
    $(".js-gotop").on("click", function (event) {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

    $(window).scroll(function () {
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $(".js-top").addClass("active");
      } else {
        $(".js-top").removeClass("active");
      }
    });
  };

  var pieChart = function () {
    $(".chart").easyPieChart({
      scaleColor: false,
      lineWidth: 4,
      lineCap: "butt",
      barColor: "#FF9000",
      trackColor: "#f5f5f5",
      size: 160,
      animate: 1000,
    });
  };

  var skillsWayPoint = function () {
    if ($("#fh5co-skills").length > 0) {
      $("#fh5co-skills").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(pieChart, 400);
            $(this.element).addClass("animated");
          }
        },
        { offset: "90%" }
      );
    }
  };
  const chk = document.getElementById("toggle");

  chk.addEventListener("change", () => {
    var theme = document.body.className;
    if (theme == 'theme-light') {
      document.body.className = 'theme-dark';
      Cookies.set("theme", "dark");
    } else {
      document.body.className = 'theme-light';
      Cookies.set("theme", "light");
    }
  });

  // Loading page
  var loaderPage = function () {
    setTimeout(() => {
      $(".fh5co-loader").fadeOut(700);
    }, 250);
  };

  $(function () {
    if (Cookies.get("lang") == "en") {
      $('[lang="cs"]').hide();
      $('[lang="en"]').show();
    }
    if (Cookies.get("lang") == "cs") {
      $('[lang="en"]').hide();
      $('[lang="cs"]').show();
    }
    if (Cookies.get("lang") == undefined) {
      $('[lang="en"]').hide();
      $('[lang="cs"]').show();
    }
    if (Cookies.get("theme") == "dark") {
      document.body.className = 'theme-dark';
      document.getElementById("toggle").checked = true;
    } else {
      document.body.className = 'theme-light';
      document.getElementById("toggle").checked = false;
    }
    contentWayPoint();
    goToTop();
    loaderPage();
    fullHeight();
    parallax();
    // pieChart();
    skillsWayPoint();


  });
})();
