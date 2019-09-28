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

var num_suspeitos = -1;
var num_locais = -1;
var num_armas = -1;

suspeito = function (investigar, index, array){
  elemento = crime.indexOf(investigar.replace(/ /g, "").toLowerCase());
  if(elemento != -1){
    num_suspeitos = index + 1
  }
}

local = function(investigar, index, array){
  elemento = crime.indexOf(investigar.replace(/ /g, "").toLowerCase());
  if(elemento != -1){
    num_locais = index + 1
  }
}

arma = function(investigar, index, array){
  elemento = crime.indexOf(investigar.replace(/ /g, "").toLowerCase());
  if(elemento != -1){
    num_armas = index + 1
  }
}



suspeitos.forEach(suspeito);
locais.forEach(local);
armas.forEach(arma);
crimes = [num_suspeitos, num_locais, num_armas];
//console.log(n_suspeitos)
//console.log(n_locais)
//console.log(n_armas)
console.log(crimes)

var num_suspeitos = -1;
var num_locais = -1;
var num_armas = -1;

var teorema = "Donald Duck Kknuth usando um trezoitão em tokiso";
console.log(teorema)
teorema = teorema.replace(/ /g, "").toLowerCase();

suspeito = function(investigar, index, array){
  elemento = teorema.indexOf(investigar.replace(/ /g, "").toLowerCase());
  if(elemento != -1){
    num_suspeitos = index + 1
  }
}

local = function(investigar, index, array){
  elemento = teorema.indexOf(investigar.replace(/ /g, "").toLowerCase());
  //console.log(investigar, ' ', elemento, ' ', index)
  if(elemento != -1){
    num_locais = index + 1
  }
}

arma = function(investigar, index, array){
  elemento = teorema.indexOf(investigar.replace(/ /g, "").toLowerCase());
  if(elemento != -1){
    num_armas = index + 1
  }
}

suspeitos.forEach(suspeito);
locais.forEach(local);
armas.forEach(arma);

teoremas = [num_suspeitos, num_locais, num_armas];
//console.log(n_suspeitos)
//console.log(n_locais)
//console.log(n_armas)
//crime = [2 ,5 , 6]
console.log(teoremas)
//console.log(crime)
//console.log(JSON.stringify(teoremas) == JSON.stringify(crimes))
//if(JSON.stringify(teoremas) == JSON.stringify(crimes)){
  ///console.log("0") //resolveu
//}

teste = []
for(i=0; i<3; i++){
  //console.log(Boolean(teoremas[i] == crimes[i]))
  //console.log(typeof(Boolean(teoremas[i] == crimes[i])))
  teste[i]= Boolean(teoremas[i] == crimes[i]) //== 'true'?false:true;
  //console.log(typeof(teste[i]))
}
//console.log(teste)
//teste = JSON.stringify(teste)
if(teste[0] == true && teste[1] == true && teste[2] == true){
  console.log(0) //resolveu
}else if(teste[0] == false && teste[1] == true && teste[2] == true){
  console.log(1) // 1 - indica que o assassiona está incorreto
}
else if(teste[0] == true && teste[1] == false && teste[2] == true){
  console.log(2) // 2 - indica que o local está incorreto
}else if(teste[0] == true && teste[1] == false && teste[2] == true){
  console.log(3) // - 3 indica que a arma está incorreta
}
// console.log(teste[1])
// console.log(teste[2] )
// console.log(teste[3] )

//console.log(teste.indexOf(false) <= 0)
//console.log(teste[1])
//console.log(teste[1] && teste[2] && teste[3])
//console.log(typeof(teste[1]))
//console.log(teste[1] && teste[2] && !teste[3])
// console.log(teste[1] && teste[2] && !teste[3])
// console.log(teste[1] && teste[2] && teste[3] )