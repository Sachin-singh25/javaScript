## project 2

const form = document.querySelector('form');
// form do taike se submit hota hai ya toh for type se ya phir get type

// Agar const Height, weight wali line idhar likh dete toh kya hota ... vo by deafult empty store kar leta apne andar

form.addEventListener('submit', function (submit) {
  submit.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a valid height ${height}`;
  }
  // else {
  //   results.innerHTML = ` your entered value of Height is ${height}`;
  // }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML=`<span>${bmi}<span>`;
  }
});
