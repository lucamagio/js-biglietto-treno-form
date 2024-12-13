const prezzoKm = 0.21;
let prezzo = kilometri * prezzoKm;

if(isNaN(kilometri)){

    console.log('inserisci un numero valido');
    
} else{

    if(isNaN(eta) || eta < 0){
        console.log('inserisci una eta valida');
    } else{
        if(eta >= 0 && eta < 18){
            console.log(`Il prezzo del biglietto è: €${(prezzo*0.8).toFixed(2)}`);
        } else if (eta >= 18 && eta < 65){
            console.log(`Il prezzo del biglietto è: €${prezzo.toFixed(2)}`);
        } else{
            console.log(`Il prezzo del biglietto è: €${(prezzo*0.6).toFixed(2)}`);
        }
    }
}
