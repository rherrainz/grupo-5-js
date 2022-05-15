/**
 * Instrucciones:
 * 
 * 1 - Para el formulario de contacto hacer que el spinner desaparezca luego de 5 segundos 
 * (investigar setTimeOut, funcion de javascript) (ID spinner)
 * y al desaparecer mostrar el formulario de contacto. (ID contact-form-card)
 * 
 * 2 - Al hacer click en el boton enviar validar que los campos no esten vacíos
 * 
 * 3 - Al hacer click en el botón enviar crear un elemento usando el dom con javascript
 * y mostrar una alerta de bootstrap( https://getbootstrap.com/docs/5.0/components/alerts/ )
 * El mensaje de la alerta debe decir que se envió el formulario
 * 
 * 4- Al desaparecer la alerta (5 segundos despues) ocultar el formulario y mostrar una card que diga como titulo h3: "Gracias por contactarnos"
 * como parrafo del body de la card mostrar un mensaje que haga referencia a que en la brevedad seran contactados.
 * 
 */

const loading= document.getElementById("spinner");
const form= document.getElementById("contact-form-card");
const button= document.getElementById("send-button");
const card=document.getElementsByClassName("card-footer");
const divAlert = document.getElementById("alert");

const loadingTimeOut = setTimeout(()=>{
  loading.classList.add('d-none'); 
  form.classList.remove('d-none');
 },1000);


//script de bootstrap para completar
(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated');
    }, false)
  })


})()

button.addEventListener('click', event =>{
  if (form.classList.contains('was-validated'))
  {
    divAlert.classList.add("alert", "alert-success");
    divAlert.innerText="Formulario enviado";
    
    const endTimeOut= setTimeout(()=>{
      divAlert.classList.add('d-none'); 
      form.classList.add('d-none');
     },3000);

}})


