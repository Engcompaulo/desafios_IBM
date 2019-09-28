// Lista com prováveis assassinos.
let suspeitos = ["Charles B. Abbage"
                ,"Donald Duck Knuth"
                ,"Ada L. Ovelace"
                ,"Alan T. Uring"
                ,"Ivar J. Acobson"
                ,"Ras Mus Ler Dorf"];

// Lista com prováveis locais do crime.            
let locais = ["Redmond"
             ,"Palo Alto "
             ,"San Francisco "
             ,"Tokio"
             ,"Restaurante no Fim do Universo"
             ,"São Paulo"
             ,"Cupertino "
             ,"Helsinki "
             ,"Maida Vale "
             ,"Toronto"];

// Lista com prováveis armas que poderiam ter sido utilizadas.
let armas = ["Peixeira" 
            ,"DynaTAC" 
            ,"Trezoitão" 
            ,"Trebuchet" 
            ,"Maça" 
            ,"Gládio"];

//console.log(suspeitos)
//console.log(locais)
//console.log(armas)

crime  = ("Donald Duck Knuth usando um trezoitão em Tokio");
console.log(crime)
crime = crime.replace(/ /g, "").toLowerCase();

n_suspeitos = -1;
n_locais = -1;
n_armas = -1;

function suspeito(investigar, index, array){
  elemento = crime.indexOf(investigar.replace(/ /g, "").toLowerCase());
  if(elemento != -1){
    n_suspeitos = index + 1
  }
}

function local(investigar, index, array){
  elemento = crime.indexOf(investigar.replace(/ /g, "").toLowerCase());
  if(elemento != -1){
    n_locais = index + 1
  }
}

function arma(investigar, index, array){
  elemento = crime.indexOf(investigar.replace(/ /g, "").toLowerCase());
  if(elemento != -1){
    n_armas = index + 1
  }
}


suspeitos.forEach(suspeito);
locais.forEach(local);
armas.forEach(arma);

//console.log(n_suspeitos)
//console.log(n_locais)
//console.log(n_armas)

testemunha = ("Donald Duck Knuth usando um trezoitão em Tokio").replace(/ /g, "").toLowerCase();
//testemunha = testemunha.replace(/ /g, "").toLowerCase();

