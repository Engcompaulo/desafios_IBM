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

crime  = ("Alan T. Uring usando um trezoitão em Tokio");
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
console.log(crimes)

var num_suspeitos = -1;
var num_locais = -1;
var num_armas = -1;

var teorema = "Alan T. Usring usando um tsrezoitão em tokio";
console.log(teorema)
teorema = teorema.replace(/ /g, "").toLowerCase();

crime = teorema;
// suspeito = function(investigar, index, array){
//   elemento = teorema.indexOf(investigar.replace(/ /g, "").toLowerCase());
//   if(elemento != -1){
//     num_suspeitos = index + 1
//   }
// }

// local = function(investigar, index, array){
//   elemento = teorema.indexOf(investigar.replace(/ /g, "").toLowerCase());
//   if(elemento != -1){
//     num_locais = index + 1
//   }
// }

// arma = function(investigar, index, array){
//   elemento = teorema.indexOf(investigar.replace(/ /g, "").toLowerCase());
//   if(elemento != -1){
//     num_armas = index + 1
//   }
// }

suspeitos.forEach(suspeito);
locais.forEach(local);
armas.forEach(arma);

teoremas = [num_suspeitos, num_locais, num_armas];
console.log(teoremas)

teste = []
for(i=0; i<3; i++){
  teste[i]= Boolean(teoremas[i] == crimes[i]) 
}

if(teste[0] == true && teste[1] == true && teste[2] == true){
  console.log(0) //resolveu
}
else if(teste[0] == false && teste[1] == true && teste[2] == true){
  console.log(1) // 1 - indica que o assassiona está incorreto
}
else if(teste[0] == true && teste[1] == false && teste[2] == true){
  console.log(2) // 2 - indica que o local está incorreto
}
else if(teste[0] == true && teste[1] == false && teste[2] == true){
  console.log(3) // - 3 indica que a arma está incorreta
}
else if(teste[0] == false && teste[1] == false && teste[2] == false){
  console.log(Math.floor((Math.random()*3)+1)) // - Todas estão erradas
}
else if(teste[0] == true && teste[1] == false && teste[2] == false){
  a = [2 , 3] // -  2, ou 3 (somente o assasino está correto)
  console.log(a[Math.floor((Math.random()*2)+0)]) 
}
else if(teste[0] == false && teste[1] == false && teste[2] == true){
  a = [1 , 2] // -  1, ou 2 (somente o arma está correto)
  console.log(a[Math.floor((Math.random()*2)+0)]) 
}
else if(teste[0] == false && teste[1] == true && teste[2] == false){
  a = [1 , 3] // -  2, ou 3 (somente o local está correto)
  console.log(a[Math.floor((Math.random()*2)+0)]) 
}

