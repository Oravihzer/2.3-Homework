/*                1+2                 */

let $nameInput = document.getElementById("nameInput");
let $ageInput = document.getElementById("ageInput");
let $emailInput = document.getElementById("emailInput");
let $btnStart = document.getElementById("runButton");
let $display = document.getElementById("display");

$btnStart.addEventListener("click", function () {
  $display.innerHTML = `${$nameInput.value} (${$ageInput.value}) - ${$emailInput.value}`;
  console.log(
    `${$nameInput.value} (${$ageInput.value}) - ${$emailInput.value}`
  );
});

/*                3                 */

let $bgChanger = document.getElementById("bgChanger");
let $brdrChanger = document.getElementById("brdrChanger");
let $wrdChanger = document.getElementById("wrdChanger");
let $changeDiv = document.getElementById("changed");

$bgChanger.addEventListener("click", function () {
  $changeDiv.classList.toggle("bgColor");
});

$brdrChanger.addEventListener("click", function () {
  $changeDiv.classList.toggle("brdrColor");
});

array1 = [
  "apple",
  "banana",
  "orange",
  "grapes",
  "watermelon",
  "melon",
  "pumpkin",
];

$wrdChanger.addEventListener("click", function () {
  $changeDiv.innerHTML = randomFruits();
  function randomFruits() {
    let x = Math.floor(Math.random() * array1.length);
    return array1[x];
  }
});

/*                4                 */

let $userNum = document.getElementById("userNumber");
let $runBtn = document.getElementById("runBtn");
let $pyramidDiv = document.getElementById("addDivContainer");
let $choices = document.querySelectorAll(".choices");

// $runBtn.addEventListener("click", function () {
//   for (y = 0; y < $userNum.value; y++) {
//     for (x = 0; x <= y; x++) {
//       $pyramidDiv.innerHTML += '<div id="addDiv"></div>';
//     }
//     $pyramidDiv.innerHTML += `<br>`;
//   }
// });

////////////////////////// choices /////////////

$runBtn.addEventListener("click", function () {
  $pyramidDiv.innerHTML = "";
  let sym = "";
  for (let i of $choices) {
    if (i.checked) {
      sym = i.value;
    }
  }

  for (y = 0; y < $userNum.value; y++) {
    for (x = 0; x <= y; x++) {
      $pyramidDiv.innerHTML += sym;
    }
    $pyramidDiv.innerHTML += `<br>`;
  }
});

//////////////////////

// <!-- 1. create a new project
// 2. ask the user for name email and age and show as follows (use inputs, divs, addEventListener)
//     "Daniel (28) - zaodk.@gamil.com"

// 3. create three buttons one will change a divs background one will change the border and one will change the text randomly from the following array
// (use classList)
// ["apple", "banana", "orange", "grapes", "watermelon"]

// 🤚🏾

// BONUS
// 4. create input which the user will tell how many levels and show in div
// 4.1 instead of * use <div></div> with some styling -->
