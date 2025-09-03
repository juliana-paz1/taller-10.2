document.addEventListener('DOMContentLoaded', function() {
    const salida = document.getElementById('data');
    const valorDato = localStorage.getItem('dato');

    if(valorDato){
        salida.textContent = valorDato;
    } else{
        salida.textContent = "(Sin dato)";
    }

});