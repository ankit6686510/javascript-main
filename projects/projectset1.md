# project related to dom
## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-juhtkw?file=4-GuessTheNumber%2Findex.html)

#  solution code

## project 1
```
console.log("ankit")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (event.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
## project solution 2 
```
const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value)//this usecase will give empty value
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span> ${bmi}</span>`;
  }
});
```