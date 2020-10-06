//funcao para criar as <option> dentro de <select>
function tempo(num, t){
  //1 - criando elemento <select>
  let select  = document.getElementById(`${t}`);
    
  for(let i=0; i <= num; i++){
    //2 - criando elemento <option>
    let option = document.createElement("OPTION");
    
    //3 - setando atributo "value" tag <option>
    option.setAttribute("value", `${i}`);
    
    //4 - criando elemento de texto
    let valorNumerico = document.createTextNode(`${i}`)
    
    //5 - adicionando filho texto ao <option>
    option.appendChild(valorNumerico)
    
    //6 - finalmente, adiciona o <option> ao <select>
    select.appendChild(option);
	} 
	
}


let contando = false;


//inicia contagem regressiva
function contagemRegressiva() {
	//chamando o id do botao que esta no html
	let btn = document.getElementById('btn');
	
	//chamando o id do som que esta no html
	let audioDespertar = document.getElementById('mySound');

	//leitura dos minutos selecionados pelo usuario
  let minutos = parseInt(document.getElementById("min").value);
  
	//leitura dos segundos selecionados pelo usuario
  let segundos = parseInt(document.getElementById("seg").value);
  
	//referencia ao elemento <p>, onde sera mostrada a contagem
  let p = document.getElementById("tempo");
	
	//se tiver true (ja estava contando antes), 
	//ao clicar no botao novamente fica em false (paramos de contar)
	if(contando) {
		//pausar o audio ( alarme)
		audioDespertar.pause();
		//Definir a cor do botao
		btn.style.backgroundColor = "green";
		//trocar texto do botao
		btn.innerHTML = "Começar";
		//definir o contador para 0
		p.innerHTML = `0 : 0`;
		//parar o setInverval
		clearInterval(funcInterval);
		//Definir o contando ( que é false por padrao) para false
		contando = false;
		// parar a tudo
    return;
  }
  //se tiver false, a contagem NAO foi iniciada, 
  //entao iniciamos a contagem agora
  else{ 
		// definir o contando para true
		contando = true;
		console.log("MINUTOS: " + minutos);
		console.log("SEGUNDOS: " + segundos);

		//trocar o texto do botao para PARAR
		btn.innerHTML = "Parar"

		//Definir a cor do botao
    btn.style.backgroundColor = "gray";
	}


  //agora o setInterval nao vai ser criado multiplas vezes, 
  //pois estamos usando a variavel 'contando' para evitar isso.
  //pois se ja tiver uma contagem rolando, nem vai chegar aqui nessa linha.
  
	funcInterval = setInterval(() => {
		console.log(`${minutos} : ${segundos}`); //imprime no console
		p.innerHTML = `${minutos} : ${segundos}`; //imprime na tag <p>
		
		//se tempo dos minutos e segundos esgotado, encerra contagem
		if(segundos === 0 && minutos === 0){
			//parar contagem
			clearInterval(funcInterval);
			//definir texto do botao para Alarme
			btn.innerHTML = "ALARME";
			//tocar o audio que esta sendo chamado no topo da funcao
			audioDespertar.play()
			btn.style.backgroundColor = "red";
		}
		
		//se segundo esgotado, 
		//vamos para o proximo minuto, 
		//e recarrega segundo com 60
		if(segundos == 0){
			minutos = minutos - 1;
			segundos = 60;
		}
		
		//a cada loop desconta 1 segundo da contagem
		segundos = segundos - 1;
	}, 1000);
	

}



tempo(60, "min");
tempo(60, "seg");
