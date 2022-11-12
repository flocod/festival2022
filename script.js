$(document).ready(function () {
  $("#input_name").on("input", () => {
    let temp_name = $("#input_name").val();
    $("#nom_invité").text(temp_name);
  });

  // teste si le Numero de téléphone est valide est valide
  function validatePhone(txtPhone) {
    var filter =
      /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(txtPhone)) {
      return true;
    } else {
      return false;
    }
  }

  function generate() {
    // var input_phone = $("#input_phone").val();
    var input_name = $("#input_name").val();

    if (input_name != "" || input_name.lenght>5) {

      html2canvas(document.querySelector("#billet_invitation")).then(
        (canvas) => {
          $(canvas).addClass("image_invitation");

          $("#container").prepend(canvas);
        }
      );


      $("#billet_invitation").fadeOut();

      setTimeout(function () {
        canvas = $("canvas");

        canvas.each(function () {
          let temp = "";
          temp = $(this).attr("class");
          if (temp == "image_invitation") {
            this.toBlob(function (blob) {
              saveAs(blob, "invitation_" + Date.now() + ".png");
            });
          }
        });

        // window.location.replace("https://chat.whatsapp.com/KjhiCdJNLOjLHvPCGMDZmf");
        $("canvas").remove();
        $("#billet_invitation").fadeIn();

      }, 1000);
       

    } else {
      alert("veuillez remplir le formulaire !");
    }
  }

  $(document).ready(function () {
    $("body").on("click", "#generate", function () {
      generate();
    });
  });
});
