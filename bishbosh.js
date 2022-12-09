
const form = document.querySelector('#inputForm');
const loopTal = document.querySelector('#loopTal');
const divisionstal1 = document.querySelector('#divisionstal1');
const divisionstal2 = document.querySelector('#divisionstal2');
const printResult = document.querySelector('#printResult');
const btn = document.querySelector('#listButton');

(function () {
    'use strict'  
    var forms = document.querySelectorAll('.needs-validation')  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()

const getResult = function(){
// console.log('Inne i rätt metod')

let bish = divisionstal1.value;
let bosh = divisionstal2.value;
let loop = loopTal.value;
// console.log(bish, bosh, loop);

printResult.innerHTML =  `<h2>Presentation av resultat</h2>`;

for (let i = 1; i <= loop; i++)
        {
            if (i % (bish * bosh) == 0) console.log('bish-bosh'), printResult.innerHTML +=  `Bish-Bosh, `;
            
            else if (i % bish == 0) console.log('bish'), printResult.innerHTML +=  `Bish, `;
            else if (i % bosh == 0) console.log('bosh'), printResult.innerHTML +=  `Bosh, `;
            
            else console.log(i), printResult.innerHTML +=  `${i}, `;
            // printResult.innerHTML +=  `<p>${i}</p>`
            // <ul>
            // <li>${i}</li>
            // <li>2</li>
            // <li>3</li>
            // </ul>
            
            // `
        }
};

// const changeText = () => textToChange.innerText = 'Hej hopp';
btn.addEventListener('click', getResult);


// let printOutText = loopTal;
// const changeText = () => textToChange.innerText = printOutText;

// let q4  = document.querySelector('#gridHeadline');
// console.log(q4);
// printResult.innerHTML += `${q4}`;

// printResult.innerHTML += `${printOutText}`;

// form['loopTal'].addEventListener('change', (e) => {
//   console.log(e.target.value);
// })





// for (let tillHundra = 1; tillHundra < 101; tillHundra++)
//         {
//             if (tillHundra % 12 == 0) console.log('bish-bosh');
            
//             else if (tillHundra % 3 == 0) console.log("bish");
//             else if (tillHundra % 4 == 0) console.log("bosh");
            
//             else console.log(tillHundra);
//         }



// btn2.addEventListener('click', function(e){

//   console.log(e.target);
//   console.log(e.target.nextElementSibling);

//   // let h1 = document.createElement('h1');
//   // h1.innerText = 'Hej';
//   // h1.addEventListener('mouseover', () => {
//   //     console.log('over');
//   // });

//   // div3.appendChild(h1);

//   // div2.classList.add('upper')
//   div2.classList.toggle('upper')
//   let text = "Hej";

// div3.innerHTML +=  `
// <ul>
// <li>${text}</li>
// <li>2</li>
// <li>3</li>
// </ul>

// `
