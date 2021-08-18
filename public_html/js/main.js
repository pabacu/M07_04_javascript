/*DOM variables*/
    var body = document.getElementsByTagName("body");
    var desc = document.querySelector("textarea");
    var rate = document.getElementById("ratevalue");
    var feedback = document.querySelector(".feedback");
    var btn = document.querySelector(".btnpost");
    var reset = document.querySelector(".btnreset");
    var send = document.querySelector(".send");
    var rating = document.querySelector(".star-rating");

/*when send rate acrooss the form*/
    btn.onclick = () => {
      feedback.style.display = "none";
      rating.style.display = "none";
      send.style.display = "block";
      rate.value = document.querySelector('input[name=rate]:checked').value;
      alert("You selected rate-" + rate.value);
      return false;
    }
/*reset button*/
    reset.onclick = () => {
      clear_rate();
      rating.style.display = "block";
      feedback.style.display = "block";
      send.style.display = "none";
      desc.value = "";
      return false;
    }

/*event listener, rate reset*/
    document.addEventListener("click", (evt) => {
      const outelement = document.getElementsByTagName("BODY");
      let targetElement = evt.target; // clicked element

      if(outelement.item(0).localName != undefined)
      {
        if (targetElement.localName === outelement.item(0).localName) {
          // This is a click inside. Do nothing, just return.
         clear_rate();
          return;
        }
      }
    });
/*function clear feddback*/
    function clear_rate()
      {
        for(var i = 1; i <= 5; i++) 
          {
            document.getElementById("rate-" + i).checked = false;
          }
          rate.value = "";
      }
