let input = document.querySelector('.input');
let allSpan = document.querySelectorAll('.btns > span');
let result  = document.querySelector('.result span');


function showMsg() {

    result.innerHTML = 'no, item to show !!!';

}



allSpan.forEach(span => {

    span.addEventListener('click', (e) => {

         if(e.target.classList.contains('sheck_item')) {

               sheckItem();

         } 

         if(e.target.classList.contains('add_item')) {
               
            addItem();

         } 

         if(e.target.classList.contains('delete_item')) {
              
            deleteItem();

         } 

         if(e.target.classList.contains('show_item')) {
            
            showItem();

         } 
    })

})

function sheckItem() {

      if(input.value !== '') {

         if(localStorage.getItem(input.value)) {

             result.innerHTML = `found item <span>${input.value}</span> in local storage`;

         }else {

            result.innerHTML = `not found item <span>${input.value}</span> in local storage`;

         }

      }else {

            showMsg();

      }

}

function addItem() {

      if(input.value !== '') {

            localStorage.setItem(input.value, 'test');

            result.innerHTML = `item <span>${input.value}</span> is added successfully in local storage`;

            input.value = '';

      } else {

           showMsg();

      }

}

function deleteItem() {

      if(input.value !== '') {

           if(localStorage.getItem(input.value)) {

                localStorage.removeItem(input.value);

                result.innerHTML = `item <span>${input.value}</span> is deleted from local storage`;

           }

      } else {

              showMsg();

      }

}

function showItem() {

      if(localStorage.length) {

            result.innerHTML = '';
   
          for(let [key, value] of Object.entries(localStorage)) {

               result.innerHTML += `<span>${key} </span>`;

          }

      }else {

          result.innerHTML = 'not found element';

      }

}