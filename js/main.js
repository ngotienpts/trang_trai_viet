function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // show sub menu mb
  var navMb = document.querySelector(".nav-mb");

  // change tab

  const tabContainer = document.querySelector('.js__tabContainer')

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
        var navLeftBar = navMb.querySelector(".nav-mb__left .icon-bar");
        var navRight = navMb.querySelector(".nav-mb__right");
        var overlay = navMb.querySelector(".side-overlay");
        // var navBox = navMb.querySelector(".nav-box-mb");
        // var navNew = navMb.querySelector(".newstop-box-mb");

        navSubs.forEach(function (navSub) {
          navSub.onclick = function () {
            this.classList.toggle("active");
          };
        });

        navLeftBar.onclick = function () {
          if (navMb.matches(".active") && navLeft.matches(".active")) {
            navMb.classList.remove("active");
            navLeft.classList.remove("active");
          } else {
            navMb.classList.add("active");
            navLeft.classList.add("active");
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

      // change tab

      if(tabContainer){
        var tabs = tabContainer.querySelectorAll('.js__tabItem')
        var panes = tabContainer.querySelectorAll('.js__paneItem')

        tabs.forEach((tab,index)=>{
          var pane = panes[index]

          tab.onclick = function() {
            document.querySelector('.js__tabItem.active ').classList.remove('active')
            document.querySelector('.js__paneItem.active ').classList.remove('active')

            this.classList.add('active')
            pane.classList.add('active')
          }
        })
      }

    },

    // slide box top mb
    slideBoxTopMb: function () {
      var swiper = new Swiper(".mySwiperBoxTopMb", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
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
      _this.scrollFunc();
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      window.addEventListener('scroll', throttle(this.windowScroll.bind(this),300));
      // slide box top mb
      this.slideBoxTopMb();
      // sticky bar home 1
    },
  };

  app.start();
});
