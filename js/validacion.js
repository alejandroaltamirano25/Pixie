// Mensaje de confirmacion de compra en las cards.

document.addEventListener('DOMContentLoaded', function () {
    // Obtenemos todos los elementos que tienen la clase 'plan-button'
    const planButtons = document.querySelectorAll('.plan-button');

    planButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault(); 
            alert('Thank you for choosing us! Please complete the form.');
            // Mostramos un mensaje utilizando la función nativa "alert".
        });
    });
});


// validacion de formulario de comentario.

document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.querySelector('.button'); // el botón de enviar

    sendButton.addEventListener('click', function () {
        // Obtenemos los campos.
        const name = document.getElementById('name');
        const lastName = document.getElementById('last-name');
        const email = document.getElementById('email');
        const comments = document.getElementById('comments');

        // Creamos arrays para guardar campos vacíos o inválidos.
        let missingFields = [];
        let invalidFields = [];

        if (name.value.trim() === '') missingFields.push('Name');
        if (lastName.value.trim() === '') missingFields.push('Last Name');
        if (email.value.trim() === '') {
            missingFields.push('E-Mail');
        } else {
            // Verificar que el campo de e-mail contenga el simbolo'@'.
            if (!email.value.includes('@')) {
                invalidFields.push('E-Mail (invalid format)');
            }
        }
        if (comments.value.trim() === '') missingFields.push('Comments');

        // Mostramos mensajes utilizando la función nativa "alert".
        if (missingFields.length > 0) {
            alert('Please complete the following fields: ' + missingFields.join(', '));
        } else if (invalidFields.length > 0) {
            alert('Some fields have an incorrect format: ' + invalidFields.join(', '));
        } else {
            alert('Thank you! Your comment has been successfully sent.');
            
        }
    });
});


