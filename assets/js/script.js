// let legumesDoc = document.getElementsByClassName('legumesCss');
// let fruitsDoc = document.getElementsByClassName('fruitsCss');
// let confituresDoc = document.getElementsByClassName('confitures');
// let boissonsDoc = document.getElementsByClassName('boissons');

let legumesDiv = document.getElementById('legumesDiv');
let fruitsDiv = document.getElementById('fruitsDiv');
let confituresDiv = document.getElementById('confituresDiv');
let boissonsDiv = document.getElementById('boissonsDiv');

let tout = [legumesDiv, fruitsDiv, confituresDiv, boissonsDiv];

// ------------------------------------------------DISPLAY TOTAL------------------------------------
function displayNone() {
  for (let i = 0; i < tout.length; i++) {
    tout[i].style.display = 'none';
  }
}

function displayTout() {
  for (let i = 0; i < tout.length; i++) {
    tout[i].style.display = '';
  }
}

let toutNone = document.getElementById('toutButton');
toutNone.addEventListener('click', displayTout);

// ------------------------------------------------/DISPLAY TOTAL------------------------------------

// -----------------------------------------------LEGUMES------------------------------------------------------
function displayNoneLegumes() {
  displayNone();
  if (legumesDiv.style.display === 'none') {
    legumesDiv.style.display = '';
  } else {
    legumesDiv.style.display = 'none';
  }
}
let legumeNone = document.getElementById('légumesButton');
legumeNone.addEventListener('click', displayNoneLegumes);
// -----------------------------------------------/LEGUMES------------------------------------------------------

// -----------------------------------------------FRUITS------------------------------------------------------
function dispalyNoneFruits() {
  displayNone();
  if (fruitsDiv.style.display === 'none') {
    fruitsDiv.style.display = '';
  } else {
    fruitsDiv.style.display = 'none';
  }
}
let fruitsNone = document.getElementById('fruitsButton');
fruitsNone.addEventListener('click', dispalyNoneFruits);

// -----------------------------------------------FRUITS------------------------------------------------------

// -----------------------------------------------CONFITURES------------------------------------------------------
function dispalyNoneConfitures() {
  displayNone();
  if (confituresDiv.style.display === 'none') {
    confituresDiv.style.display = '';
  } else {
    confituresDiv.style.display = 'none';
  }
}
let confituresNone = document.getElementById('confituresButton');
confituresNone.addEventListener('click', dispalyNoneConfitures);
// -----------------------------------------------/CONFITURES------------------------------------------------------

// -----------------------------------------------BOISSONS------------------------------------------------------
function dispalyNoneBoissons() {
  displayNone();
  if (boissonsDiv.style.display === 'none') {
    boissonsDiv.style.display = '';
  } else {
    boissonsDiv.style.display = 'none';
  }
}
let boissonsNone = document.getElementById('boissonsButton');
boissonsNone.addEventListener('click', dispalyNoneBoissons);
// -----------------------------------------------/BOISSONS------------------------------------------------------

var mainDoc = document.querySelector('main');
var imgDoc = mainDoc.getElementsByTagName('img');

// imgDoc.addEventListener(MouseEvent);
