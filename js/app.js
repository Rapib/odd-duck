'use strict';

// how many rounds of voting 

let vote = 0;
let maxVote = 25;

// Render img
let image1 = document.querySelector('#img img:first-child');
let image2 = document.querySelector('#img img:nth-child(2)');
let image3 = document.querySelector('#img img:nth-child(3)');


//constructor function for item
function Item(name, src) {
  this.name = name;
  this.src = src;
  // this.src = `img/${name}.jpg`;
  this.view = 0;
  this.like = 0;
}

//all items

let bag = new Item('bag', 'img/bag.jpg');
let banana = new Item('banana', 'img/banana.jpg');
let bathroom = new Item('bathroom', 'img/bathroom.jpg');
let boots = new Item('boots', 'img/boots.jpg');
let breakfast = new Item('breakfast', 'img/breakfast.jpg');
let bubblegum = new Item('bubblegum', 'img/bubblegum.jpg');
let chair = new Item('chair', 'img/chair.jpg');
let cthulhu = new Item('cthulhu', 'img/cthulhu.jpg');
let dogDuck = new Item('dog-duck', 'img/dog-duck.jpg');
let dragon = new Item('dragon', 'img/dragon.jpg');
let pen = new Item('pen', 'img/pen.jpg');
let petSweep = new Item('pet-sweep', 'img/pet-sweep.jpg');
let scissors = new Item('scissors', 'img/scissors.jpg');
let shark = new Item('shark', 'img/shark.jpg');
let sweep = new Item('sweep', 'img/sweep.png');
let tauntaun = new Item('tauntaun', 'img/tauntaun.jpg');
let unicorn = new Item('unicorn', 'img/unicorn.jpg');
let waterCan = new Item('water-can', 'img/water-can.jpg');
let wineGlass = new Item('wine-glass', 'img/wine-glass.jpg');

// all product in an array
let list = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass];

//Random no
function rng() {
  return Math.floor(Math.random() * list.length);
}



function renderImg() {

  let img1 = rng();
  let img2 = rng();
  let img3 = rng();
  console.log(img1, img2, img3);
  while (img1 === img2 || img1 === img3 || img2 === img3) {
    img2 = rng();
    img3 = rng();
  }
  //change img shown
  image1.src = list[img1].src;
  image2.src = list[img2].src;
  image3.src = list[img3].src;
  image1.alt = list[img1].name;
  image2.alt = list[img2].name;
  image3.alt = list[img3].name;
  list[img1].view++;
  list[img2].view++;
  list[img3].view++;

}
renderImg();
// add event listener



let img = document.getElementById('img');


let resultUl = document.getElementById('resultUl');



let mouseClick = function (event) {
  // console.log(event.target.alt);
  let clickName = event.target.alt;
  for (let i =0; i <list.length; i++){
    if (clickName === list[i].name){
      list[i].like++;
      vote++;
      console.log(list[i].like);
    }
  }
  if (vote<maxVote){
    renderImg();
  } else {
    img.removeEventListener('click', mouseClick);
    alert("Please click 'View Results' on the left.")
    // render();
    viewResult.addEventListener('click', render);
    renderImg();
  }
  
};

img.addEventListener('click', mouseClick);

// render result
let render = function(){
  for (let j=0; j <list.length; j++){
    let newList = document.createElement('li');
    newList.textContent = `${list[j].name} has ${list[j].like} votes, and was seen ${list[j].view} times.`;
    //banana had 3 votes, and was seen 5 times.
    resultUl.appendChild(newList);
  }
  viewResult.removeEventListener('click', render);
}

let viewResult = document.getElementById('view');

