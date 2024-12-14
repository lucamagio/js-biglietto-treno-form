const inputKm = document.querySelector('#inputKm');
const inputEta = document.querySelector('#inputEta');
const submitButton = document.querySelector('#submitButton')
const outputResult = document.querySelector('#result')

submitButton.addEventListener('click', function(event) {
    event.preventDefault()

    let km = inputKm.value;
    let eta = inputEta.value;
    const prezzoKm = 0.21;
    let prezzoNormale = parseFloat(km * prezzoKm);
    let prezzoUnder = parseFloat(km * prezzoKm * 0.8);
    let prezzoOver = parseFloat(km * prezzoKm * 0.6);
    let result = 0;

    if(isNaN(km) || km <= 0 || isNaN(eta) || eta < 0){

        result = 'inserisci un numero valido su chilometri, su eta o su entrambi';
        
    } else{

            if(eta >= 0 && eta < 18){
                result = `Il prezzo del biglietto è: €${prezzoUnder.toFixed(2)}`;
            } else if (eta >= 18 && eta < 65){
                result = `Il prezzo del biglietto è: €${prezzoNormale.toFixed(2)}`;
            } else{
                result = `Il prezzo del biglietto è: €${prezzoOver.toFixed(2)}`;
            }
        }

    outputResult.innerHTML = result;
    }
)