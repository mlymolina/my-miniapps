function getHistory() {
  return document.querySelector('#history-value').innerText
}

function printHistory(){
  document.querySelector('#history-value').innerText = num
}
function getOutput(){
  return document.querySelector('#output-value').innerText
}

function printOutput(num) {
  if(num ==  "") {
    document.querySelector('#output-value').innerText = num
  } else {
    document.querySelector('#output-value').innerText = getFormattedNumber(num)
  }
}

function getFormattedNumber(num) {
  return Number(num).toLocaleString('en')
}

function removeNumberFormat(num) {
  return Number(num.replace(/,/g, ''))
}

var operator = document.querySelectorAll('.operator')
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function(){

  })
}

var number = document.querySelectorAll('.number')
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function(){
    let output = removeNumberFormat(getOutput())
    if (output != NaN) {
      output += this.id
      printOutput(output)
    }
  })
}
