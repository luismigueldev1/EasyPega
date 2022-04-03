setInterval(() => {
  //get all pegas
  let pegasCards, pegasEnergysElements;
  pegasCards =
    document.querySelectorAll(
      "#__next > div.root > div.container > div > div.bx-right.fixed > div.bx-content.default > div > div > div > div > div.item-pega"
    ) || null;
  pegasEnergysElements =
    document.querySelectorAll(
      "#__next > div.root > div.container > div > div.bx-right.fixed > div.bx-content.default > div > div > div > div > div > div > div > div.item-info > div.action-enegy.sm > div > div.list-enegy > div > span"
    ) || null;

  let energys = [];
  let maxEnergy = Number || null;

  //removing 3d image
  const pega3d =
    document.querySelector(
      "#__next > div.root > div.container > div > div.bx-left > div.bx-content.default > div > div.infoPega > div.pega-thumb"
    ) || null;

  if (pega3d) {
    pega3d.remove();
  }

  //validate if exist
  if (pegasEnergysElements.length > 0) {
    pegasEnergysElements.forEach((item, index) => {
      energys.push({
        energy: item.textContent.split("/")[0],
        index,
      });
    });

    maxEnergy = energys.reduce((prev, current) => {
      return prev.energy > current.energy ? prev : current;
    });

    //make click to element
    pegasCards[maxEnergy.index].click();
  }

  //get Start Button and click them
  const textButtonStart =
    document.querySelector(
      "#__next > div.root > div.container > div > div.bx-left > div.bx-content.default > div > div.infoPega > div.pega-info > div.viewButton > span"
    ) || null;

  //validate if exist

  if (Number(maxEnergy.energy) > 0) {
    if (textButtonStart) {
      setTimeout(() => {
        textButtonStart.click();
      }, 1500);
    }
  }

  //get next match Button and click them
  const nextMatchButton =
    document.querySelector(
      "#__next > div.root > div.container > div > div > div.bx-content.finish > div > div > div.top-position > div.list-action > div:nth-child(2) > div > div.btn-position.button-game-content > div > span.content-name-title"
    ) || null;

  if (nextMatchButton) {
    setTimeout(() => {
      nextMatchButton.click();
    }, 1000);
  }

  //if race is full then click find another match

  const findAnotherMatchButton =
    document.querySelector(
      "body > div.fade.modal-alert.modal.show > div > div > div > div > div.alert-link > div:nth-child(2) > div > div.btn-position.button-game-content > div > span.content-name-title"
    ) || null;

  if (findAnotherMatchButton) {
    setTimeout(() => {
      findAnotherMatchButton.click();
    }, 1000);
  }
}, 2000);

setInterval(() => {
  window.location.reload();
}, 360000);
