
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


for (let tillHundra = 1; tillHundra < 101; tillHundra++)
        {
            if (tillHundra % 12 == 0) console.log('bish-bosh');
            
            else if (tillHundra % 3 == 0) console.log("bish");
            else if (tillHundra % 4 == 0) console.log("bosh");
            
            else console.log(tillHundra);
        }