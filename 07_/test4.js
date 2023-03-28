function changeBgColor(newColor) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, 1000);
  });
}

/*
changeBgColor("red")
  .then(function () {
    return changeBgColor("orenge");
  })
  .then(function () {
    return changeBgColor("yellow");
  })
  .then(function () {
    return changeBgColor("green");
  })
  .then(function () {
    return changeBgColor("blue");
  });
  */

async function exec() {
  await changeBgColor("red");
  await changeBgColor("orenge");
  await changeBgColor("yellow");
  await changeBgColor("green");
  await changeBgColor("blue");
}
exec();
