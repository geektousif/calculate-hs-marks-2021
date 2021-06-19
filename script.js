"use strict";

document.getElementById("mp-beng").value = "";
document.getElementById("mp-eng").value = "";
document.getElementById("mp-math").value = "";
document.getElementById("mp-physc").value = "";
document.getElementById("mp-lsc").value = "";
document.getElementById("mp-hist").value = "";
document.getElementById("mp-geo").value = "";
document.getElementById("beng11").value = "";
document.getElementById("eng11").value = "";
document.getElementById("mark1").value = "";
document.getElementById("mark2").value = "";
document.getElementById("mark3").value = "";
document.getElementById("mark4").value = "";

var labBased = [
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "Computer Application",
  "Geography",
  "Nutrition",
  "Statistics",
];
var nonLabBased = [
  "Mathematics",
  "Environment Studies",
  "Political Science",
  "Education",
  "Philosophy",
  "History ",
  "Sanskrit",
  "Economics",
];

var allSubjects = labBased.concat(nonLabBased);

var tm1, tm2, tm3, tm4, pm1, pm2, pm3, pm4;

var elec1 = document.getElementById("elec1");
var outof1 = document.getElementById("outof1");

for (var i = 0; i < allSubjects.length; i++) {
  var optn = allSubjects[i];
  var el = document.createElement("option");
  el.textContent = optn;
  el.value = optn;
  elec1.appendChild(el);
}

var elec1onChange = () => {
  var opt1 = elec1.options[elec1.selectedIndex];
  if (labBased.includes(opt1.text)) {
    outof1.innerHTML = `${opt1.text} : (marks out 70)`;
    tm1 = 70;
    pm1 = 30;
  }
  if (nonLabBased.includes(opt1.text)) {
    outof1.innerHTML = `${opt1.text} : (marks out 80)`;
    tm1 = 80;
    pm1 = 20;
  }
  document.getElementById("subj1").innerHTML = opt1.text;
};

var elec2 = document.getElementById("elec2");
var outof2 = document.getElementById("outof2");

for (var i = 0; i < allSubjects.length; i++) {
  var optn = allSubjects[i];
  var el = document.createElement("option");
  el.textContent = optn;
  el.value = optn;
  elec2.appendChild(el);
}

var elec2onChange = () => {
  var opt2 = elec2.options[elec2.selectedIndex];
  if (labBased.includes(opt2.text)) {
    outof2.innerHTML = `${opt2.text} : (marks out 70)`;
    tm2 = 70;
    pm2 = 30;
  }
  if (nonLabBased.includes(opt2.text)) {
    outof2.innerHTML = `${opt2.text} : (marks out 80)`;
    tm2 = 80;
    pm2 = 20;
  }
  document.getElementById("subj2").innerHTML = opt2.text;
};

var elec3 = document.getElementById("elec3");
var outof3 = document.getElementById("outof3");

for (var i = 0; i < allSubjects.length; i++) {
  var optn = allSubjects[i];
  var el = document.createElement("option");
  el.textContent = optn;
  el.value = optn;
  elec3.appendChild(el);
}

var elec3onChange = () => {
  var opt3 = elec3.options[elec3.selectedIndex];
  if (labBased.includes(opt3.text)) {
    outof3.innerHTML = `${opt3.text} : (marks out 70)`;
    tm3 = 70;
    pm3 = 30;
  }
  if (nonLabBased.includes(opt3.text)) {
    outof3.innerHTML = `${opt3.text} : (marks out 80)`;
    tm3 = 80;
    pm3 = 20;
  }
  document.getElementById("subj3").innerHTML = opt3.text;
};

var elec4 = document.getElementById("elec4");
var outof4 = document.getElementById("outof4");

for (var i = 0; i < allSubjects.length; i++) {
  var optn = allSubjects[i];
  var el = document.createElement("option");
  el.textContent = optn;
  el.value = optn;
  elec4.appendChild(el);
}

var elec4onChange = () => {
  var opt4 = elec4.options[elec4.selectedIndex];
  if (labBased.includes(opt4.text)) {
    outof4.innerHTML = `${opt4.text} : (marks out 70)`;
    tm4 = 70;
    pm4 = 30;
  }
  if (nonLabBased.includes(opt4.text)) {
    outof4.innerHTML = `${opt4.text} : (marks out 80)`;
    tm4 = 80;
    pm4 = 20;
  }
  document.getElementById("subj4").innerHTML = opt4.text;
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("eleven").style.display = "none";
  document.getElementById("final").style.display = "none";
  document.getElementById("generateTopFour").addEventListener("click", () => {
    var mpBeng = document.getElementById("mp-beng").value;
    var mpEng = document.getElementById("mp-eng").value;
    var mpMath = document.getElementById("mp-math").value;
    var mpPhysc = document.getElementById("mp-physc").value;
    var mpLsc = document.getElementById("mp-lsc").value;
    var mpHist = document.getElementById("mp-hist").value;
    var mpGeo = document.getElementById("mp-geo").value;

    if (
      mpBeng == null ||
      mpBeng == "" ||
      mpEng == null ||
      mpEng == "" ||
      mpMath == null ||
      mpMath == "" ||
      mpPhysc == null ||
      mpPhysc == "" ||
      mpLsc == null ||
      mpLsc == "" ||
      mpHist == null ||
      mpHist == "" ||
      mpGeo == null ||
      mpGeo == ""
    ) {
      window.alert("Please Fill All Required Field");
      return false;
    } else {
      var mpAllArray = [
        parseInt(mpBeng),
        parseInt(mpEng),
        parseInt(mpMath),
        parseInt(mpPhysc),
        parseInt(mpLsc),
        parseInt(mpHist),
        parseInt(mpGeo),
      ];

      function getBestFourFn(array) {
        var mpTopFour = array.sort((x, y) => y - x).slice(0, 4);
        console.log("all : ", array);
        console.log("top 4 : ", mpTopFour);
        return mpTopFour.reduce((a, b) => a + b, 0);
      }
      var getBestFour = getBestFourFn(mpAllArray);
      console.log(getBestFour);
      document.getElementById("eleven").style.display = "inherit";
      document.getElementById("eleven").scrollIntoView();
      document.getElementById("beng11").focus();

      document
        .getElementById("calculateFinal")
        .addEventListener("click", () => {
          var beng11 = document.getElementById("beng11").value;
          var eng11 = document.getElementById("eng11").value;
          var mark1 = document.getElementById("mark1").value;
          var mark2 = document.getElementById("mark2").value;
          var mark3 = document.getElementById("mark3").value;
          var mark4 = document.getElementById("mark4").value;

          if (
            beng11 == null ||
            beng11 == "" ||
            eng11 == null ||
            eng11 == "" ||
            mark1 == null ||
            mark1 == "" ||
            mark2 == null ||
            mark2 == "" ||
            mark3 == null ||
            mark3 == "" ||
            mark4 == null ||
            mark4 == ""
          ) {
            window.alert("Please Fill All Required Field");
            return false;
          } else {
            document.getElementById("final").style.display = "inherit";
            document.getElementById("final").scrollIntoView();

            var bengNo = (parseInt(beng11) * 60) / 100;
            var engNo = (parseInt(eng11) * 60) / 100;
            var mark1No = (parseInt(mark1) * 60) / 100;
            var mark2No = (parseInt(mark2) * 60) / 100;
            var mark3No = (parseInt(mark3) * 60) / 100;
            var mark4No = (parseInt(mark4) * 60) / 100;

            var engTh = (((getBestFour / 400) * 40) / 100) * 80 + engNo;
            var bengTh = (((getBestFour / 400) * 40) / 100) * 80 + bengNo;
            var mark1Th = (((getBestFour / 400) * 40) / 100) * tm1 + mark1No;
            var mark2Th = (((getBestFour / 400) * 40) / 100) * tm2 + mark2No;
            var mark3Th = (((getBestFour / 400) * 40) / 100) * tm3 + mark3No;
            var mark4Th = (((getBestFour / 400) * 40) / 100) * tm4 + mark4No;

            document.getElementById("engFinal").innerHTML = Math.round(
              engTh + 20
            );
            document.getElementById("bengFinal").innerHTML = Math.round(
              bengTh + 20
            );
            document.getElementById("mark1Final").innerHTML = Math.round(
              mark1Th + pm1
            );
            document.getElementById("mark2Final").innerHTML = Math.round(
              mark2Th + pm2
            );
            document.getElementById("mark3Final").innerHTML = Math.round(
              mark3Th + pm3
            );
            document.getElementById("mark4Final").innerHTML = Math.round(
              mark4Th + pm4
            );

            document.getElementById("engSp").innerHTML = `(${Math.round(
              engTh
            )} + 20)`;
            document.getElementById("bengSp").innerHTML = `(${Math.round(
              bengTh
            )} + 20)`;
            document.getElementById("mark1Sp").innerHTML = `(${Math.round(
              mark1Th
            )} + ${pm1})`;
            document.getElementById("mark2Sp").innerHTML = `(${Math.round(
              mark2Th
            )} + ${pm2})`;
            document.getElementById("mark3Sp").innerHTML = `(${Math.round(
              mark3Th
            )} + ${pm3})`;
            document.getElementById("mark4Sp").innerHTML = `(${Math.round(
              mark4Th
            )} + ${pm4})`;
          }
        });
    }
  });
});
