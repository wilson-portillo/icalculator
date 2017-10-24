let store = [] //where numbers will be are stored
let ops = []  //where operators will be are stored
let resetScreen = false //set to true after equals sign is pressed to run next equation

function addToScreen(value){
  if(resetScreen){
    document.getElementById("answer").innerHTML = ""
  }

  document.getElementById("answer").innerHTML += value
  resetScreen = false
}

function clearScreen(){
  document.getElementById("answer").innerHTML = ""
  store = []
  ops = []
}

function negative(){
  if(document.getElementById("answer").innerHTML === ""){
    document.getElementById("answer").innerHTML = "-"
  }
  //when numbers are pressed after output is shown reset the screen in this case carry on
  resetScreen = false;
}

function percent(){
  //store whatever is currently on the screen
  store.push(document.getElementById("answer").innerHTML)
  //clear the screen
  document.getElementById("answer").innerHTML = ""
  //operator
  store[store.length-1] = store[store.length-1] / 100;
  //when numbers are pressed after output is shown reset the screen in this case carry on
  resetScreen = false;
}

function addition(){
  //store whatver is currently on the screen
  store.push(document.getElementById("answer").innerHTML)
  //clear the screen
  document.getElementById("answer").innerHTML = ""
  //operator
  ops.push("plus")
  //when numbers are pressed after output is shown reset the screen in this case carry on
  resetScreen = false
}

function subtraction(){
  //store whatver is currently on the screen
  store.push(document.getElementById("answer").innerHTML)
  //clear the screen
  document.getElementById("answer").innerHTML = ""
  //operator
  ops.push("minus")
  //when numbers are pressed after output is shown reset the screen in this case carry on
  resetScreen = false
}

function multiplication(){
  //store whatver is currently on the screen
  store.push(document.getElementById("answer").innerHTML)
  //clear the screen
  document.getElementById("answer").innerHTML = ""
  //operator
  ops.push("multiply")
  //when numbers are pressed after output is shown reset the screen in this case carry on
  resetScreen = false
}

function division(){
  //store whatver is currently on the screen
  store.push(document.getElementById("answer").innerHTML)
  //clear the screen
  document.getElementById("answer").innerHTML = ""
  //operator
  ops.push("divide")
  //when numbers are pressed after output is shown reset the screen in this case carry on
  resetScreen = false
}

function equals(){

  store.push(document.getElementById("answer").innerHTML)

  //fixing a problem that I had no idea could exist
  //percentages can create an empty spot in the store array
  for(var i = 0 ; i < store.length; i++){
    if(store[i]===""){
      store.splice(i,1)
    }
  }

  while(ops.length>0){


    if(ops[0] === "plus"){
      store[0] = parseFloat(store[0]) + parseFloat(store[1])
      store.splice(1,1)
      ops.shift()
    }
    if(ops[0] === "minus"){
      store[0] = parseFloat(store[0]) - parseFloat(store[1])
      store.splice(1,1)
      ops.shift()
    }
    if(ops[0] === "multiply"){
      store[0] = parseFloat(store[0]) * parseFloat(store[1])
      store.splice(1,1)
      ops.shift()
    }
    if(ops[0] === "divide"){
      store[0] = parseFloat(store[0]) / parseFloat(store[1])
      store.splice(1,1)
      ops.shift()
    }
  }

  document.getElementById("answer").innerHTML = store[0];

  resetScreen = true;

  store = []
}
