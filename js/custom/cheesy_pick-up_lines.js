function cheesy_pick_up_lines() {
    let html = "";
    for (let i = 0; i < 1; i++) {
      fetch("https://api.vvhan.com/api/ian?cl=wx")
        .then((data) => data.text())
        .then((data) => {
          html += "<li>" + data + "</li>";
          document.querySelector("#cheesy_pick-up_lines-container").innerHTML =
            html;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  
  cheesy_pick_up_lines();