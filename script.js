document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("myButton");
    button.style.left = 50 + "%";
    button.style.top = 50 + "%";
    button.addEventListener("mouseover", function () {
        
      var input = document.getElementById("myInput").value;
      if (input == null || input == "") {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var x = Math.random() * (width - button.offsetWidth);
        var y = Math.random() * (height - button.offsetHeight);

        button.style.left = x + "px";
        button.style.top = y + "px";
      } else {
        button.style.left = 50 + "%";
        button.style.top = 50 + "%";
      }
    });
  });
  var input;
  var hasil;
  function Kalkulasi() {
    input = document.getElementById("myInput").value;
    hasil = input * (9 / 5) + 32;
    console.log(hasil);
    document.getElementById("output").innerText = hasil;

    document.getElementById("caraKalkulasi").innerHTML =
      "<p> (" +
      input +
      " &degC " +
      " X 9/5) + 32 = " +
      hasil +
      " &deg" +
      "F </p>";
  }

  function Reset() {
    document.getElementById("myInput").value = "";
    document.getElementById("output").innerText = "";
    document.getElementById("caraKalkulasi").innerHTML = "";
  }

  function Reverse() {}