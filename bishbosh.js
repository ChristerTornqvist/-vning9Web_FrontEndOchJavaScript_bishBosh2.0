const form = document.querySelector('#inputForm');
const loopTal = document.querySelector('#loopTal');
const divisionstal1 = document.querySelector('#divisionstal1');
const divisionstal2 = document.querySelector('#divisionstal2');
const printResult = document.querySelector('#printResult');
const btn = document.querySelector('#listButton');

(function()
{
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms).forEach(function (form)
  {
    form.addEventListener('submit', function (event)
    {
      if (!form.checkValidity())
      {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()
const getResult = function()
{
  let bish = divisionstal1.value;
  let bosh = divisionstal2.value;
  let loop = loopTal.value;
  printResult.innerHTML = `<h2>Presentation av resultat</h2>`;
  if (bish > 0 && bosh > 0 && loop < 10000)
  {
    for (let i = 1; i <= loop; i++)
    {
      if (i % (bish * bosh) == 0) console.log('bish-bosh'), printResult.innerHTML +=  `Bish-Bosh, `;
      else if (i % bish == 0) console.log('bish'), printResult.innerHTML +=  `Bish, `;
      else if (i % bosh == 0) console.log('bosh'), printResult.innerHTML +=  `Bosh, `;
      else console.log(i), printResult.innerHTML +=  `${i}, `;
    }
  }
}
btn.addEventListener('click', getResult);