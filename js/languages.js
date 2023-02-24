
$(function () {
  jQuery(document).ready(function (e) {
    function t(t) {
      e(t).bind("click", function (t) {
        t.preventDefault();
        e(this).parent().fadeOut();
      });
    }
    e(".dropdown-toggle").click(function () {
      var t = e(this)
        .parents(".button-dropdown")
        .children(".dropdown-menu")
        .is(":hidden");
      e(".button-dropdown .dropdown-menu").hide();
      e(".button-dropdown .dropdown-toggle").removeClass("active");
      if (t) {
        e(this)
          .parents(".button-dropdown")
          .children(".dropdown-menu")
          .toggle()
          .parents(".button-dropdown")
          .children(".dropdown-toggle")
          .addClass("active");
      }
    });
    e(document).bind("click", function (t) {
      var n = e(t.target);
      if (!n.parents().hasClass("button-dropdown"))
        e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
      var n = e(t.target);
      if (!n.parents().hasClass("button-dropdown"))
        e(".button-dropdown .dropdown-toggle").removeClass("active");
    });
  });

  $("#en").click(function () {
    $('[lang="cs"]').hide();
    $('[lang="en"]').show();
    $(".button-dropdown .dropdown-menu").hide();
    $(".fh5co-loader").show();
    setTimeout(() => {
      $(".fh5co-loader").fadeOut(300);
    }, 80);
    Cookies.set("lang", "en", { sameSite: "strict", expires: 7 });
  });

  $("#cs").click(function () {
    $('[lang="en"]').hide();
    $('[lang="cs"]').show();
    $(".button-dropdown .dropdown-menu").hide();
    $(".fh5co-loader").show();
    setTimeout(() => {
      $(".fh5co-loader").fadeOut(300);
    }, 80);
    Cookies.set("lang", "cs", { sameSite: "strict", expires: 7 });
  });
});
