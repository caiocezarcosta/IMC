function myFunction() {
    function calculaIMC() {
        const peso = parseFloat(document.querySelector('.peso').value);
        const altura = parseFloat(document.querySelector('.altura').value);
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = ''; 
        
        if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
            resultado.innerHTML = `Digite valores válidos para peso e altura`;
            resultado.style.backgroundColor = 'red'; // Define a cor de fundo como vermelha
            resultado.style.border = '2px solid red'; // Define a borda vermelha
            resultado.style.borderRadius = '10px'; // Arredonda as bordas
            return;
        }

        const imc = (peso / Math.pow(altura, 2)).toFixed(2);

        if (imc < 18.5) {
            resultado.innerHTML = `Seu IMC é ${imc} e você está abaixo do peso`;
            resultado.style.backgroundColor = '#45FF1F'; 
            resultado.style.borderRadius = '10px';
            resultado.style.padding = '10px'
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML = `Seu IMC é ${imc} e seu peso é normal`;
            resultado.style.backgroundColor = '#45FF1F'; 
            resultado.style.borderRadius = '10px';
            resultado.style.padding = '10px'
        }
        else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `Seu IMC é ${imc} e você possui sobrepeso`;
            resultado.style.backgroundColor = '#45FF1F'; 
            resultado.style.borderRadius = '10px';
            resultado.style.padding = '10px'
        }
        else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML = `Seu IMC é ${imc} e você possui obesidade grau 1`;
            resultado.style.backgroundColor = '#45FF1F'; 
            resultado.style.borderRadius = '10px';
            resultado.style.padding = '10px'
        }
        else if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `Seu IMC é ${imc} e possui obesidade grau 2`;
            resultado.style.backgroundColor = '#45FF1F'; 
            resultado.style.borderRadius = '10px';
            resultado.style.padding = '10px'
        }
        else {
            resultado.innerHTML = `Seu IMC é ${imc} e possui obesidade grau 3`;
            resultado.style.backgroundColor = '#45FF1F'; 
            resultado.style.borderRadius = '10px';
            resultado.style.padding = '10px'
        }
    }

    function exibirResultado(evento) {
        evento.preventDefault();
        calculaIMC();
    }

    document.querySelector('form').addEventListener('submit', exibirResultado);
}

myFunction();
