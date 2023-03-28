/*setTimeout(function () {
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "orange";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "yellow";
      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "green";
        setTimeout(function () {
          document.querySelector("body").style.backgroundColor = "blue";
          setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "gray";
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);*/

/*

let body = document.querySelector("body");

function red() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("red");
    }, 1000);
  });
}
function orenge() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("orenge");
    }, 1000);
  });
}
function yellow() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("yellow");
    }, 1000);
  });
}
function green() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("green");
    }, 1000);
  });
}

red().then(function (result) {
  body.style.backgroundColor = result;
});
orenge().then(function (result) {
  body.style.backgroundColor = result;
});
yellow().then(function (result) {
  body.style.backgroundColor = result;
});
green().then(function (result) {
  body.style.backgroundColor = result;
});*/

function changeBgColor(newColor) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, 1000);
  });
}

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
