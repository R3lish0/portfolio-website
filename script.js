document.getElementById("experience").addEventListener("click", function () {
  document.getElementById("page-two-container").scrollIntoView({
    behavior: "smooth",
  });
});

document.getElementById("experience-2").addEventListener("click", function () {
  document.body.style.overflow = "hidden";

  var myDiv = document.getElementById("mobile-blurb-2");
  myDiv.classList.add("show");
});

document
  .getElementById("mobile-blurb-2-close")
  .addEventListener("click", function () {
    document.body.style.overflow = "auto";

    var myDiv = document.getElementById("mobile-blurb-2");
    myDiv.classList.remove("show");
  });

document.getElementById("experience-1").addEventListener("click", function () {
  document.body.style.overflow = "hidden";

  var myDiv = document.getElementById("mobile-blurb-1");
  myDiv.classList.add("show");
});

document
  .getElementById("mobile-blurb-1-close")
  .addEventListener("click", function () {
    document.body.style.overflow = "auto";

    var myDiv = document.getElementById("mobile-blurb-1");
    myDiv.classList.remove("show");
  });
