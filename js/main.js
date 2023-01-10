document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // width document
  var widthDoc = document.querySelector("body");

  // fancybox
  var fancyboxes = document.querySelectorAll(".fancybox-full");

  // show sub menu mb
  var navMb = document.querySelector(".nav-mb");

  // end show sub menu mb

  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;

      // when click back top
      if (backTop) {
        backTop.onclick = function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        };
      }

      // sub menu mb
      if (navMb) {
        var navSubs = navMb.querySelectorAll(".nav-item__heading");
        var navLeft = navMb.querySelector(".nav-mb__left");
        var navRight = navMb.querySelector(".nav-mb__right");
        var overlay = navMb.querySelector(".side-overlay");
        // var navBox = navMb.querySelector(".nav-box-mb");
        // var navNew = navMb.querySelector(".newstop-box-mb");

        navSubs.forEach(function (navSub) {
          navSub.onclick = function () {
            this.classList.toggle("active");
          };
        });

        navLeft.onclick = function () {
          if (navMb.matches(".active") && this.matches(".active")) {
            navMb.classList.remove("active");
            this.classList.remove("active");
          } else {
            navMb.classList.add("active");
            this.classList.add("active");
          }
        };

        navRight.onclick = function () {
          if (navMb.matches(".active") && this.matches(".active")) {
            navMb.classList.remove("active");
            this.classList.remove("active");
          } else {
            navMb.classList.add("active");
            this.classList.add("active");
          }
        };
        overlay.onclick = function () {
          if (navMb.matches(".active") && navLeft.matches(".active")) {
            navMb.classList.remove("active");
            navLeft.classList.remove("active");
          }
          if (navMb.matches(".active") && navRight.matches(".active")) {
            navMb.classList.remove("active");
            navRight.classList.remove("active");
          }
        };
      }

      // hide cac element khi click ra ngoai
      document.addEventListener("click", function (e) {
        // if (menuPc && btnMenu) {
        //   if (
        //     !menuPc.querySelector(".wrapper").contains(e.target) &&
        //     !e.target.matches(".icon-expandmenu")
        //   ) {
        //     menuPc.classList.remove("active");
        //     btnMenu.classList.remove("active");
        //   }
        // }
      });
    },

    // slide topic list
    slideToppicList: function () {
      $(".topic-list").slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    },
    // sticky bar home 1
    stickyHome1: function () {
      $(".leftSidebar-1,.rightSidebar-1").theiaStickySidebar({
        additionalMarginTop: 60,
      });
    },
    // fancybox
    fancybox: function () {
      if (fancyboxes) {
        fancyboxes.forEach(function (fancybox) {
          $(".fancybox-full a").fancybox();
        });
      }
    },
    // scroll top
    scrollFunc: function () {
      if (backTop) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          backTop.style.opacity = 1;
          backTop.style.visibility = "visible";
        } else {
          backTop.style.opacity = 0;
          backTop.style.visibility = "hidden";
        }
      }
    },
    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        _this.scrollFunc();
      };
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      this.windowScroll();
      // slide topic list
      this.slideToppicList();
      // sticky bar home 1
      this.stickyHome1();
      // fancybox
      this.fancybox();
    },
  };

  app.start();
});
