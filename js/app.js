'use strict';
// all product in an array
let list = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dogDuck','dragon','pen','petSweep','scissors','shark','sweep','tauntaun','unicorn','waterCan','wineGlass'];

//constructor function for item
function Item (name, src){
  this.name = name;
  this.src = src;
  this.view = 0;
  this.like = 0;
}

//all items

let bag = new Item('bag', 'img/bag.jpg');
let banana = new Item('banana', 'img/banana.jpg');
let bathroom = new Item('bathroom', 'img/bathroom.jpg');
let boots = new Item('boots', 'img/boots.jpg');
let breakfast = new Item('breakfast','img/breakfast.jpg');
let bubblegum = new Item('bubblegum', 'img/bubblegum.jpg');
let chair = new Item('chair','img/chair.jpg');
let cthulhu = new Item('cthulhu','img/cthulhu.jpg');
let dogDuck = new Item('dog-duck','img/dog-duck.jpg');
let dragon = new Item('dragon','img/dragon.jpg');
let pen = new Item('pen','img/pen.jpg');
let petSweep = new Item('pet-sweep','img/pet-sweep.jpg');
let scissors = new Item('scissors','img/scissors.jpg');
let shark = new Item('shark','img/shark.jpg');
let sweep = new Item('sweep','img/sweep.png');
let tauntaun = new Item('tauntaun','img/tauntaun.jpg');
let unicorn = new Item('unicorn','img/unicorn.jpg');
let waterCan = new Item('water-can','img/water-can.jpg');
let wineGlass = new Item('wine-glass','img/wine-glass.jpg');





let img = document.getElementById('img');

let image1 = document.querySelector('#img img:first-child');
let image2 = document.querySelector('#img img:nth-child(2)');
let image3 = document.querySelector('#img img:nth-child(3)');


image1.src = bag.src;
image2.src = banana.src;
image3.src = bathroom.src;