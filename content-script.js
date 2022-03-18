const DEFAULT_RENT = "5";
const DEFAULT_ENERGY = "0";
const DEFAULT_NEXTPAGE = "2";

//Listener to refresh page
window.addEventListener("keydown", ({ key }) => {
  //refresh page
  if (key == "q") {
    window.location.reload();
    console.log("Reloading page...");
  }

  //jump 1
  if (key == "1") {
    const url = window.location.href;
    const newPegaId = Number(url.split("/")[5]) + 1;
    const newUrl = url.split("/").slice(0, -1).join("/") + "/" + newPegaId;
    window.location.href = newUrl;
    console.log("Navigating to another pegaxy...");
  }

  //jump 2
  if (key == "2") {
    const url = window.location.href;
    const newPegaId = Number(url.split("/")[5]) + 2;
    const newUrl = url.split("/").slice(0, -1).join("/") + "/" + newPegaId;
    window.location.href = newUrl;
    console.log("Navigating to another pegaxy...");
  }
  //jump 3
  if (key == "3") {
    const url = window.location.href;
    const newPegaId = Number(url.split("/")[5]) + 3;
    const newUrl = url.split("/").slice(0, -1).join("/") + "/" + newPegaId;
    window.location.href = newUrl;
    console.log("Navigating to another pegaxy...");
  }
  //jump 4
  if (key == "4") {
    const url = window.location.href;
    const newPegaId = Number(url.split("/")[5]) + 4;
    const newUrl = url.split("/").slice(0, -1).join("/") + "/" + newPegaId;
    window.location.href = newUrl;
    console.log("Navigating to another pegaxy...");
  }
  //jump 10
  if (key == "5") {
    const url = window.location.href;
    const newPegaId = Number(url.split("/")[5]) + 10;
    const newUrl = url.split("/").slice(0, -1).join("/") + "/" + newPegaId;
    window.location.href = newUrl;
    console.log("Navigating to another pegaxy...");
  }
  //jump 20
  if (key == "6") {
    const url = window.location.href;
    const newPegaId = Number(url.split("/")[5]) + 20;
    const newUrl = url.split("/").slice(0, -1).join("/") + "/" + newPegaId;
    window.location.href = newUrl;
    console.log("Navigating to another pegaxy...");
  }

  //jump 2
  if (key == "e") {
    const url = window.location.href;
    const newPegaId = Number(url.split("/")[5]) + 2;
    const newUrl = url.split("/").slice(0, -1).join("/") + "/" + newPegaId;
    window.location.href = newUrl;
    console.log("Navigating to another pegaxy...");
  }
});

async function pegaListing() {
  //Do the rest
  const intervalButton = setInterval(() => {
    const unityContainer = document.querySelector(
      "#__next > div.root > div.container > div > div > div.bx-content.default > div > div.viewDetail.detailPega > div.viewThumbDetail"
    );

    if (unityContainer) {
      unityContainer.remove();
    }

    const rentTitle = document.querySelector(
      "#__next > div.root > div.container > div > div > div.bx-content.default > div > div.viewDetail.detailPega > div.viewInfoDetail > div.viewInfo-bid > div:nth-child(1) > div.item-bid-title > span"
    );

    if (rentTitle.textContent == "You earn") {
      //getting % of rent
      const percentRaw = document.querySelector(
        "#__next > div.root > div.container > div > div > div.bx-content.default > div > div.viewDetail.detailPega > div.viewInfoDetail > div.viewInfo-bid > div:nth-child(1) > div.item-bid-info > span"
      );
      const percent = Number(percentRaw.textContent.split("%")[0]);

      //if % rent >= DEFAULT_RENT then continue
      if (percent >= DEFAULT_RENT) {
        //getting energys horse
        const energysRaw = document.querySelector(
          "#__next > div.root > div.container > div > div > div.bx-content.default > div > div.viewDetail.detailPega > div.viewInfoDetail > div.viewInfo-header > div.action-enegy.sm > div > div.list-enegy > div > span"
        );
        const energyAvailable = Number(energysRaw.textContent.split("/")[0]);

        //if energy > DEFAULT_RENT then continue
        if (energyAvailable >= DEFAULT_ENERGY) {
          const button = document.querySelector(
            "div.viewInfo-bid > div.item-button > div > div > div.btn-position.button-game-content"
          );

          //IF button then clear interval and click the button
          if (button) {
            //Check if button text is Rent
            const buttonRent = document.querySelector(
              "#__next > div.root > div.container > div > div > div.bx-content.default > div > div.viewDetail.detailPega > div.viewInfoDetail > div.viewInfo-bid > div.item-button > div > div > div.btn-position.button-game-content > div > span.content-name-title"
            );
            if (buttonRent.textContent == "Rent") {
              window.clearInterval(intervalButton);
              button.click();
            }

            //INTERVAL to find button primary
            const intervalButtonPrimary = setInterval(() => {
              console.log("looking for primary button");
              const buttonPrimary = document.querySelector(
                "body > div.fade.modal-alert.modal.show > div > div > div > div.viewAlert > div.alert-button > div > div"
              );

              const rentText = document.querySelector(
                "body > div.fade.modal-alert.modal.show > div > div > div > div.viewAlert > div.alert-button > div > div > div.btn-position.button-game-content > div > span.content-name-title"
              );

              //IF the button is ready clear interval and click the button
              if (
                buttonPrimary.classList.contains("primary") &&
                rentText.textContent == "Rent"
              ) {
                console.log("primary button found click");
                clearInterval(intervalButtonPrimary);
                buttonPrimary.click();
              }
            }, 50);
          }
        }
      }
    }
  }, 50);
}

pegaListing();
