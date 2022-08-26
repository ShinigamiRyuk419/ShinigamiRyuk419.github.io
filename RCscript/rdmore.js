$("#more5").hide();
$('#myBtn').on('click', function () {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more5");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      $(moreText).hide('slow');
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      $(moreText).show('slow');
    }
  });

$("#more6").hide();
$('#myBtn1').on('click', function () {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more6");
    var btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      $(moreText).hide('slow');
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      $(moreText).show('slow');
    }
  });