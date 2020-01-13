loadCheckins({
  count: 1,
  ignore: ["Home (private)", "Food", "Residence"],
  customCallback: showIntroText
});

function refreshIntro() {
  loadCheckins({
    count: 1,
    ignore: ["Home (private)", "Food", "Residence"],
    customCallback: showIntroText
  });
}

function getAge() {
  var element = document.getElementById("age");
  var today = new Date();
  var birthday = new Date(1997, 2, 3);

  var jahr = today.getFullYear() - birthday.getFullYear();

  var m = today.getMonth() - birthday.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    jahr--;
  }

  if (today.getMonth() < birthday.getMonth()) {
    var monat =
      ((12 + today.getMonth() - birthday.getMonth()) / 12).toPrecision(1) * 10;
  } else {
    var monat =
      ((today.getMonth() - birthday.getMonth()) / 12).toPrecision(1) * 10;
  }

  return jahr + "," + monat;
}

function showIntroText(lastSeen) {
  var element = document.getElementById("intro-text");
  var text;

  var de =
    "Hi, mein Name ist Jannis. " +
    "Ich bin " +
    getAge() +
    " Jahre alt und wurde zuletzt " +
    lastSeen.de +
    " gesehen.";

  var en =
    "Hi, I'm Jannis. " +
    "I'm " +
    getAge() +
    " years old and I was seen " +
    lastSeen.en +
    " the last time.";

  if (getCookie("lang") == "en") {
    text = en;
  } else {
    text = de;
  }

  element.innerHTML = text;
}
