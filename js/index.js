document.addEventListener('DOMContentLoaded', function() {
    const campoDato = document.getElementById('inputText');
    const boton = document.getElementById('buttonText');

    boton.addEventListener('click', function() {
        const dato = campoDato.value.trim();
        if(dato){
            localStorage.setItem('dato', dato);
            campoDato.value = '';
        }
    });
    
});