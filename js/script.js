// owl crausal  ===============================

$(document).ready(function () {
  var two = $("#two");
  var three = $("#three");
  var four = $("#four");

  // two-----------------------------
  two.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,

    responsive: {
      0: {
        items: 1,
      },

      400: {
        items: 2,
      },

      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  // three--------------------------------
  three.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    mouseDrag: true,
    touchDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  //  four ---------------------------
  four.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    mouseDrag: true,
    touchDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

// toggle menu =============================

let menu = document.getElementById("menu");
let showhide = document.getElementById("menu_item");

document.getElementById("menu_bar").addEventListener("click", function () {
  if (showhide.style.height === "250px") {
    showhide.style.height = "0";
  } else {
    showhide.style.height = "250px";
  }
});

window.addEventListener("click", function (e) {
  if (
    !document.getElementById("menu_item").contains(e.target) &&
    !document.getElementById("menu_bar").contains(e.target)
  ) {
    document.getElementById("menu_item").style.height = "0";
  }
});

// dropdown===

document.getElementById("pages").addEventListener("click", function () {
  let dropdown = document.querySelector(".dropdown");

  if (dropdown.style.height === "150px") {
    dropdown.style.height = "0";
    dropdown.style.padding = "0";
    dropdown.style.marginTop = "0";
  } else {
    dropdown.style.height = "150px";
    dropdown.style.padding = ".5rem";
    dropdown.style.marginTop = ".7rem";
    showhide.style.height = "auto";
  }

  window.addEventListener("click", function (e) {
    if (
      !document.querySelector(".dropdown").contains(e.target) &&
      !document.getElementById("pages").contains(e.target)
    ) {
      document.querySelector(".dropdown").style.height = "0";
      document.querySelector(".dropdown").style.padding = "0";
      document.querySelector(".dropdown").style.marginTop = "0";
    }
  });
});

// blog

document.getElementById("blog").addEventListener("click", function () {
  let blogLinks = document.querySelector(".blog_links");

  if (blogLinks.style.height === "120px") {
    blogLinks.style.height = "0";
    blogLinks.style.marginTop = "0";
  } else {
    blogLinks.style.height = "120px";
    blogLinks.style.marginTop = ".7rem";
    showhide.style.height = "auto";
  }

  window.addEventListener("click", function (e) {
    if (
      !document.querySelector(".blog_links").contains(e.target) &&
      !document.getElementById("blog").contains(e.target)
    ) {
      document.querySelector(".blog_links").style.height = "0";
      document.querySelector(".blog_links").style.marginTop = "0";
    }
  });
});

// #home slider img slide show-------

let images = ["img/banner11.jpg", "img/banner22.jpg"];
let i = 0;

function slideShow() {
  document.getElementById("sider_imgs").src = images[i];

  if (i < images.length - 1) {
    i++;
    document.querySelector(".text_area").style.right = "8%";
  } else {
    i = 0;
    document.querySelector(".text_area").style.right = "40%";
  }
  setTimeout("slideShow()", 5000);
}

window.onload = slideShow;

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document
      .getElementById("navbar")
      .setAttribute("style", " position: fixed; top:0; left:0; right:0;");
    document.getElementById("navbar").style.boxShadow =
      "0 5px 20px 0 rgba(0, 0, 0, .2)";
  } else {
    document
      .getElementById("navbar")
      .setAttribute("style", "position: static; boxShadow:0; top:-100px");
  }
}

// cart number increase and decrese function

function up(max) {
  document.getElementById("myNumber").value =
    parseInt(document.getElementById("myNumber").value) + 1;
  if (document.getElementById("myNumber").value >= parseInt(max)) {
    document.getElementById("myNumber").value = max;
  }
}
function down(min) {
  document.getElementById("myNumber").value =
    parseInt(document.getElementById("myNumber").value) - 1;
  if (document.getElementById("myNumber").value <= parseInt(min)) {
    document.getElementById("myNumber").value = min;
  }
}

// ================================

function up_second(max) {
  document.getElementById("myNumber2").value =
    parseInt(document.getElementById("myNumber2").value) + 1;
  if (document.getElementById("myNumber2").value >= parseInt(max)) {
    document.getElementById("myNumber2").value = max;
  }
}
function down_second(min) {
  document.getElementById("myNumber2").value =
    parseInt(document.getElementById("myNumber2").value) - 1;
  if (document.getElementById("myNumber2").value <= parseInt(min)) {
    document.getElementById("myNumber2").value = min;
  }
}

// ==================================

function up_third(max) {
  document.getElementById("myNumber3").value =
    parseInt(document.getElementById("myNumber3").value) + 1;
  if (document.getElementById("myNumber3").value >= parseInt(max)) {
    document.getElementById("myNumber3").value = max;
  }
}
function down_third(min) {
  document.getElementById("myNumber3").value =
    parseInt(document.getElementById("myNumber3").value) - 1;
  if (document.getElementById("myNumber3").value <= parseInt(min)) {
    document.getElementById("myNumber3").value = min;
  }
}
