window.onload=function(){
			contenedor=document.getElementById("contenedor");

			//El tamaño de la zona visible de la ventana es con window.innerWidth
			console.log("tamaño zona Visible " + window.innerWidth);
			if(window.innerWidth <=1000){
				//Elemento contenedor
				contenedor.style.width="500px"; //El ancho de la zona de juego
  				contenedor.style.height="500px";// El alto de la zona de juego
				anchoContenedor= parseInt(contenedor.style.width);//ParseInt para obtener solo el valor de 530
				altoContenedor=parseInt(contenedor.style.height);

				//Elemento marcador
				marcador=document.getElementById("marcador");
				puntuacion=0;
				marcador.innerHTML="Puntuacion: " + puntuacion; //Mostramos la puntuación en el tablero juego
				marcador.style.width=100 + "px";
				marcador.style.height=20 + "px";
				marcador.style.left="10px";
				marcador.style.top="10px";
				marcador.style.fontSize= "1.0rem";

				vida1=document.getElementById("vida1");
				vida1.style.left="380px";
				vida1.style.width=30 + "px";
				vida1.style.height=20 + "px";
				vida1.style.top="10px";
				vida2=document.getElementById("vida2");
				vida2.style.left="420px";
				vida2.style.width=30 + "px";
				vida2.style.height=20 + "px";
				vida2.style.top="10px";
				vida3=document.getElementById("vida3");
				vida3.style.left="460px";
				vida3.style.width=30 + "px";
				vida3.style.height=20 + "px";
				vida3.style.top="10px";
				vidas=3; //El juego tiene 3 vidas

				botonComenzar=document.getElementById("botonComenzar");
				botonComenzar.style.left="0px";
				botonComenzar.style.width=anchoContenedor + "px";
				botonComenzar.style.top="505px";


				//CreamosLadrillos
			ladrillos = [
				  {
				    "id": 1, "backgroundColor": "purple", "width": "80px", "height": "20px", "position": "absolute", "left": "10px", "top": "50px", "visibility": "visibility",
				  },
				    {
				    "id": 2,"backgroundColor": "purple", "width": "80px","height": "20px","position": "absolute","left": "110px","top": "50px","visibility": "visibility",
				  },
				    {
				    "id": 3,"backgroundColor": "purple", "width": "80px","height": "20px","position": "absolute","left": "210px","top": "50px","visibility": "visibility",
				  },
				    {
				    "id": 4,"backgroundColor": "purple", "width": "80px","height": "20px","position": "absolute","left": "310px","top": "50px","visibility": "visibility",
				  },
				    {
				    "id": 5,"backgroundColor": "purple", "width": "80px","height": "20px","position": "absolute","left": "410px","top": "50px","visibility": "visibility",
				  },
				    {
				    "id": 6, "backgroundColor": "purple", "width": "80px", "height": "20px", "position": "absolute", "left": "10px", "top": "90px", "visibility": "visibility",
				  },
				    {
				    "id": 7,"backgroundColor": "purple", "width": "80px","height": "20px","position": "absolute","left": "110px","top": "90px","visibility": "visibility",

				  },
				    {
				   	 "id": 8,"backgroundColor": "purple", "width": "80px","height": "20px","position": "absolute","left": "210px","top": "90px","visibility": "visibility",
				  },
				    {
				    "id": 9,"backgroundColor": "purple", "width": "80px","height": "20px","position": "absolute","left": "310px","top": "90px","visibility": "visibility",
				  },
				    {
				    "id": 10,"backgroundColor": "purple", "width": "80px","height": "20px","position": "absolute","left": "410px","top": "90px","visibility": "visibility",
				  },
				    {
				    "id": 11, "backgroundColor": "purple", "width": "80px", "height": "20px", "position": "absolute", "left": "10px", "top": "130px", "visibility": "visibility",
				  },
				    {
				    "id": 12,"backgroundColor": "purple", "width": "80px","height": "20px","position": "absolute","left": "110px","top": "130px","visibility": "visibility",
				  },
				    {
				    "id": 13,"backgroundColor": "purple", "width": "80px","height": "20px","position": "absolute","left": "210px","top": "130px","visibility": "visibility",
				  },
				    {
				    "id": 14,"backgroundColor": "purple", "width": "80px","height": "20px","position": "absolute","left": "310px","top": "130px","visibility": "visibility",
				  },
				    {
				   "id": 15,"backgroundColor": "purple", "width": "80px","height": "20px","position": "absolute","left": "410px","top": "130px","visibility": "visibility",
				  },

				]

			ladrillo= new Array();

			for(var i=0; i<ladrillos.length; i++){
				//console.log("entre for");
				ladrillo[i]=document.createElement("div");
				ladrillo[i].style.backgroundColor=ladrillos[i].backgroundColor;
				//console.log(ladrillos[i].backgroundColor);
				ladrillo[i].style.width=ladrillos[i].width;
				ladrillo[i].style.height=ladrillos[i].height;
				ladrillo[i].style.position=ladrillos[i].position;
				ladrillo[i].style.left=ladrillos[i].left;
				ladrillo[i].style.top=ladrillos[i].top;
				ladrillo[i].style.visibility=ladrillos[i].visibility;
				ladrillo[i].id=ladrillos[i].id;
				contenedor.appendChild(ladrillo[i]);
			}

				raqueta=document.createElement("div");
				raqueta.style.width= 100 + "px";
				raqueta.style.height= 20 + "px";
				posicionActualRaquetaX=anchoContenedor/2 - parseInt(raqueta.style.width)/2 + "px";
				//Es la mitad de la pantalla y la mitad de la raqueta porque se colocará en la posición x e y)
				posicionActualRaquetaY="460px";
				raqueta.style.left=posicionActualRaquetaX;
				raqueta.style.top=posicionActualRaquetaY;
				propiedadesRaqueta();
				contenedor.appendChild(raqueta);
				anchoRaqueta=raqueta.style.width;
				altoRaqueta=raqueta.style.height;
				posRaquetaX=parseInt(raqueta.style.left);
				posicionRaquetaY=parseInt(raqueta.style.top);;





			}else{
				contenedor=document.getElementById("contenedor");
				contenedor.style.width="900px"; //El ancho de la zona de juego
				contenedor.style.width=window.innerHeight + "px"; //El ancho de la zona de juego
  				contenedor.style.height="900px";// El alto de la zona de juego
  				//contenedor.style.width=window.innerHeight + "px"; //El ancho de la zona de juego
				anchoContenedor= parseInt(contenedor.style.width);//ParseInt para obtener solo el valor de 530
				console.log ("Ancho TableroJuego " + anchoContenedor)
				altoContenedor=parseInt(contenedor.style.height);
				console.log ("Alto TableroJuego " + altoContenedor)


				marcador=document.getElementById("marcador");
				puntuacion=0;
				marcador.innerHTML="Puntuacion: " + puntuacion; //Mostramos la puntuación en el tablero juego
				marcador.style.width=200 + "px";
				marcador.style.height=30 + "px";
				marcador.style.left="20px";
				marcador.style.top="20px";
				marcador.style.fontSize= "1.2rem";

				vida1=document.getElementById("vida1");
				vida1.style.left="600px";
				vida1.style.width=50 + "px";
				vida1.style.height=30 + "px";
				vida1.style.top="20px";
				vida2=document.getElementById("vida2");
				vida2.style.left="700px";
				vida2.style.width=50 + "px";
				vida2.style.height=30 + "px";
				vida2.style.top="20px";
				vida3=document.getElementById("vida3");
				vida3.style.left="800px";
				vida3.style.width=50 + "px";
				vida3.style.height=30 + "px";
				vida3.style.top="20px";
				vidas=3; //El juego tiene 3 vidas

				botonComenzar=document.getElementById("botonComenzar");
				botonComenzar.style.left="0px";
				botonComenzar.style.width=anchoContenedor + "px";
				botonComenzar.style.top="905px";


				//CreamosLadrillos
			ladrillos = [
				  {
				    "id": 1, "backgroundColor": "purple",  "width": "150px", "height": "30px", "position": "absolute", "left": "20px", "top": "100px","visibility": "visibility",
				  },
				    {
				    "id": 2, "backgroundColor": "purple", "width": "150px", "height": "30px", "position": "absolute","left": "190px", "top": "100px", "visibility": "visibility",
				  },
				    {
				    "id": 3, "backgroundColor": "purple", "width": "150px", "height": "30px", "position": "absolute", "left": "360px", "top": "100px", "visibility": "visibility",
				  },
				    {
				    "id": 4, "backgroundColor": "purple","width": "150px","height": "30px","position": "absolute", "left": "530px", "top": "100px", "visibility": "visibility",
				  },
				    {
				    "id": 5, "backgroundColor": "purple", "width": "150px","height": "30px", "position": "absolute", "left": "700px", "top": "100px", "visibility": "visibility",
				  },
				    {
				    "id": 6, "backgroundColor": "purple", "width": "150px", "height": "30px",  "position": "absolute", "left": "20px", "top": "150px", "visibility": "visibility",
				  },
				    {
				    "id": 7, "backgroundColor": "purple", "width": "150px", "height": "30px", "position": "absolute", "left": "190px", "top": "150px", "visibility": "visibility",
				  },
				    {
				    "id": 8, "backgroundColor": "purple",  "width": "150px",  "height": "30px", "position": "absolute", "left": "360px","top": "150px","visibility": "visibility",
				  },
				    {
				    "id": 9, "backgroundColor": "purple", "width": "150px", "height": "30px","position": "absolute","left": "530px","top": "150px","visibility": "visibility",
				  },
				    {
				    "id": 10,  "backgroundColor": "purple","width": "150px","height": "30px","position": "absolute","left": "700px","top": "150px", "visibility": "visibility",
				  },
				    {
				    "id": 11, "backgroundColor": "purple", "width": "150px","height": "30px","position": "absolute", "left": "20px", "top": "200px","visibility": "visibility",
				  },
				    {
				    "id": 12, "backgroundColor": "purple","width": "150px", "height": "30px",  "position": "absolute","left": "190px", "top": "200px","visibility": "visibility",
				  },
				    {
				    "id": 13, "backgroundColor": "purple","width": "150px", "height": "30px",  "position": "absolute",  "left": "360px",  "top": "200px", "visibility": "visibility",
				  },
				    {
				    "id": 14, "backgroundColor": "purple",  "width": "150px",  "height": "30px",  "position": "absolute",   "left": "530px",  "top": "200px", "visibility": "visibility",
				  },
				    {
				    "id": 15, "backgroundColor": "purple", "width": "150px","height": "30px", "position": "absolute",  "left": "700px","top": "200px","visibility": "visibility",
				  },

				]

			ladrillo= new Array();

			for(var i=0; i<ladrillos.length; i++){
				//console.log("entre for");
				ladrillo[i]=document.createElement("div");
				ladrillo[i].style.backgroundColor=ladrillos[i].backgroundColor;
				//console.log(ladrillos[i].backgroundColor);
				ladrillo[i].style.width=ladrillos[i].width;
				ladrillo[i].style.height=ladrillos[i].height;
				ladrillo[i].style.position=ladrillos[i].position;
				ladrillo[i].style.left=ladrillos[i].left;
				ladrillo[i].style.top=ladrillos[i].top;
				ladrillo[i].style.visibility=ladrillos[i].visibility;
				ladrillo[i].id=ladrillos[i].id;
				contenedor.appendChild(ladrillo[i]);
			}

			raqueta=document.createElement("div");
			raqueta.style.width= 150 + "px";
			raqueta.style.height= 30 + "px";
			posicionActualRaquetaX="375px";// (450 es la mitad de la pantalla y 75 la mitad de la raqueta porque se colocará en la posición x e y)
			posicionActualRaquetaY="800px";
			raqueta.style.left=posicionActualRaquetaX;
			raqueta.style.top=posicionActualRaquetaY;
			propiedadesRaqueta();
			contenedor.appendChild(raqueta);
			anchoRaqueta=raqueta.style.width;
			altoRaqueta=raqueta.style.height;
			posRaquetaX=parseInt(raqueta.style.left);
			posicionRaquetaY=parseInt(raqueta.style.top);;

		}//Fin del else
			
			


			//Recuerda que para usar un elemnto. raqueta.style, primero este debe ser declarado
			pelota=document.createElement("div");
			propiedadesPelota();
			contenedor.appendChild(pelota);
			anchoPelota=parseInt(pelota.style.width);
			altoPelota=parseInt(pelota.style.height);

			posicionPelotaX=parseInt(pelota.style.left);
			//console.log ("PosicionP en X: " + posicionPelotaX);
			posicionPelotaY=parseInt(pelota.style.top);
			//console.log ("PosicionP en Y: " + posicionPelotaY);
			//Velocidades
			velocidadX=-3;//Para que se mueva de izquierda a derecha
			velocidadY=-3;//Para que se mueva de arriba a abajo


			

			eliminados=new Array(); //Los objetos eliminados

			
			//Para empezar la partida cuando haga click
			document.addEventListener("click", comenzarPartida);


		}//fin del window.onload

		function propiedadesPelota(){
			console.log("function propiedadesPelota");
			pelota.style.backgroundColor="orange";
			pelota.style.width= 20 + "px";
			pelota.style.height= 20 + "px";
			pelota.style.borderRadius="50px";
			pelota.style.position="absolute";
			//Establecemos las posiciones iniciales de la bola que se mueve
			//Math.floor() redondea al entero inferior
			//Serán posiciones aleatoria usando Math.floor(Math.random() * ((maximo)-minimo)+minimo);
			// Retorna un número aleatorio entre min (incluido) y max (excluido)
			//posicionAleatoriaX=Math.floor(Math.random() * ((anchoContenedor-50)-10)+ 10);//anchoFondo-50 para que no salga del marco
			//posicionAleatoriaY=Math.floor(Math.random() * ((altoContenedor/2)-450)+ 450);//Para que aparezca a partir de la mitad de la pantalla;
			pelota.style.left= parseInt(raqueta.style.left) + parseInt(raqueta.style.width)/2 - parseInt(pelota.style.height)/2+ "px" ;
			pelota.style.top=parseInt(raqueta.style.top) - parseInt(pelota.style.width) + "px";
			pelota.style.visibility="visibility";
			pelota.id="idPelota";
		}


		function propiedadesRaqueta(){
			console.log("function propiedadesRaqueta");
			raqueta.style.backgroundColor="purple";
			raqueta.style.borderRadius="20px";
			raqueta.style.position="absolute";
			/*
			raqueta.style.width= 150 + "px";
			raqueta.style.height= 30 + "px";
			posicionActualRaquetaX="375px";// (450 es la mitad de la pantalla y 75 la mitad de la raqueta porque se colocará en la posición x e y)
			posicionActualRaquetaY="800px";
			raqueta.style.left=posicionActualRaquetaX;
			raqueta.style.top=posicionActualRaquetaY;
			*/
			raqueta.style.visibility="visibility";
			raqueta.id="idPelota";
		}


		function tecladoDownRaqueta(event){
			console.log(event.keyCode);
			document.removeEventListener("mousemove", moverRaquetaRaton);
			switch(event.keyCode){
				case 37://Se mueve hacia la izquierda
					if(posRaquetaX >0 ){
						posRaquetaX -= 3;
						raqueta.style.left=parseInt(posRaquetaX) +"px";
					}
					break;
				case 39:
					if(posRaquetaX < parseInt(anchoContenedor) - parseInt(raqueta.style.width) -5){
						posRaquetaX += 3;
						raqueta.style.left=parseInt(posRaquetaX) +"px";					
					}
			}//fin del switch
			document.addEventListener("mousemove", moverRaquetaRaton);//El ratón vuelve a funcionar
		}


		function moverRaquetaRaton(event){
			posicionXRaton=event.clientX;
			//console.log(posicionXRaton);
			posRaquetaX=posicionXRaton - 75; //60 es la mitad de la raqueta
			//console.log(posRaquetaX);
			if(posRaquetaX >=  parseInt(anchoContenedor) - 150){
				posRaquetaX = parseInt(anchoContenedor)-150;//120 es la anchura total de la raqueta
				raqueta.style.left=parseInt(posRaquetaX) +"px";
			}
			else if(posRaquetaX <= 0){
				posRaquetaX=0;
				raqueta.style.left=parseInt(posRaquetaX) +"px";
			}
			else{
				posRaquetaX=posicionXRaton - 75;
				raqueta.style.left=parseInt(posRaquetaX) +"px";
			}
		}

		function comenzarPartida(){
			intervalo1=setInterval(moverPelota, 2);
			document.removeEventListener("click", comenzarPartida); //Quitamos el evento para que no se ejecute de nuevo
			setTimeout(pararPartida, 50000); //Para que no sea un bucle infinito

			/*NUEVO*/
			//Creamos los escuchadores de la raqueta tanto para teclado como para ratón
			document.addEventListener("keydown", tecladoDownRaqueta);//EscuchadorSiPulsa
			document.addEventListener("mousemove", moverRaquetaRaton);//Escuchar cuando se utiliza el ratón

		}
		function pararPartida(){
			location.reload();//actualiza la página recuperando sus valores
			clearInterval(intervalo1);
		}

		function moverPelota(){
			//console.log("function moverPelota");
			//Antes de mover la pelota hay que comprobar si hubo choque, es decir antes de asignar el top y el left se tiene que verificar el choque, porque si lo hay cambiaria su velocidad
			comprobarColisiones();
			posicionPelotaX += velocidadX;
			posicionPelotaY += velocidadY;
			pelota.style.left=posicionPelotaX +"px";
			pelota.style.top=posicionPelotaY + "px";
		}

		function comprobarColisiones(){
			//console.log(" function comprobarColisiones");

			//COMPROBAR COLISIONES CON PARED
			if(posicionPelotaX > anchoContenedor - anchoPelota ||posicionPelotaX < 0 ){//Si llega al máximo a la derecha y al máximo a la izquierda
				//Los parseInt es porque me llegan los datos con el px y solo quiero el número
				velocidadX *= -1;
			}

			if(posicionPelotaY -5 < 0) { //Si llega a la parte superior de la zona de juego
				velocidadY *= -1;
			}

			if(posicionPelotaY +5 >altoContenedor -altoPelota){//Si llega a la parte inferior de la zona de juego
				/*Nueva */
				partidaNueva();
				//velocidadYPelota *=-1
			}



			//COLISIÓN CON LOS LADRILLOS
			for(var i=0; i<ladrillo.length; i++){
				console.log("longitud array Ladrillo " + ladrillo.length);

				//colisiones desde abajo
				if(posicionPelotaY >= parseInt(ladrillo[i].style.top) &&
					posicionPelotaY <=parseInt(ladrillo[i].style.top) + parseInt(ladrillo[i].style.height) ) {

					if(posicionPelotaX + anchoPelota>=parseInt(ladrillo[i].style.left) && posicionPelotaX + anchoPelota <= parseInt(ladrillo[i].style.left) + parseInt(ladrillo[i].style.width)	){
						//alert("caso1");//inferiorIzq
						choqueLadrilloTrue();
					}
					if(posicionPelotaX >=parseInt(ladrillo[i].style.left) && posicionPelotaX + anchoPelota <= parseInt(ladrillo[i].style.left) + parseInt(ladrillo[i].style.width)	){
						//alert("caso2"); //InferiorCentro
						choqueLadrilloTrue();

					}
					if(posicionPelotaX >=parseInt(ladrillo[i].style.left) && posicionPelotaX <= parseInt(ladrillo[i].style.left) + parseInt(ladrillo[i].style.width)	){
						//alert("caso3"); //InferiorDerecho
						choqueLadrilloTrue();
					}
				}//fin del if del top inferior

	


				//Colisiones desde arriba
				if(posicionPelotaY + altoPelota>= parseInt(ladrillo[i].style.top) &&
					posicionPelotaY + altoPelota<=parseInt(ladrillo[i].style.top) + parseInt(ladrillo[i].style.height) ) {

					if(posicionPelotaX + anchoPelota>=parseInt(ladrillo[i].style.left) && posicionPelotaX + anchoPelota <= parseInt(ladrillo[i].style.left) + parseInt(ladrillo[i].style.width)	){
						//alert("caso4");//superiorIzq
						choqueLadrilloTrue();	
					}
					if(posicionPelotaX >=parseInt(ladrillo[i].style.left) && posicionPelotaX + anchoPelota <= parseInt(ladrillo[i].style.left) + parseInt(ladrillo[i].style.width)	){
						//alert("caso5");//superiorCentro
						choqueLadrilloTrue();
					}
					if(posicionPelotaX >=parseInt(ladrillo[i].style.left) && posicionPelotaX <= parseInt(ladrillo[i].style.left) + parseInt(ladrillo[i].style.width)	){
						//alert("caso6");//superiorDerecho
						choqueLadrilloTrue();
					}

				}//fin del if del top superior



				//colision por la izquierda			
				if(posicionPelotaY <=parseInt(ladrillo[i].style.top) &&
					posicionPelotaY + altoPelota >=parseInt(ladrillo[i].style.top) + parseInt(ladrillo[i].style.height) &&
					posicionPelotaX <=parseInt(ladrillo[i].style.left) &&
					posicionPelotaX + anchoPelota >=parseInt(ladrillo[i].style.left)
					){
					//alert("caso7");//izqCentro
					choqueLadrilloTrue();
				}

				//colision por la derecha	
				if(posicionPelotaY <=parseInt(ladrillo[i].style.top) &&
					posicionPelotaY + altoPelota >=parseInt(ladrillo[i].style.top) + parseInt(ladrillo[i].style.height) &&
					posicionPelotaX <=parseInt(ladrillo[i].style.left) + parseInt(ladrillo[i].style.width) &&
					posicionPelotaX >=parseInt(ladrillo[i].style.left) 
					){
					//alert("caso8");//derechaCentro
					choqueLadrilloTrue();
				}

				/* 
			si tu quieres remover el elemento de x posición, usa:
			travelers.splice(x,1);
			Lo bueno de splice es que puedes obtener un sub-array que contiene lo que has eliminado, es decir, podrías guardarlo para después si quisieras:
			var elementoEliminado = travelers.splice(2, 1);
			*/

				function choqueLadrilloTrue(){
					ladrillo[i].style.visibility = "hidden";
					/*El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.*/
					eliminados.push(ladrillo.splice(i,1).toString());
					puntuacion++;
					marcador.innerHTML="Puntuacion: " + puntuacion; //Mostramos la puntuación en el tablero juego
					console.log("longitud array Ladrillo " + ladrillo.length);
					velocidadY *= -1;//cambiamos su dirección de movimiento
				}

			}//fin del for

		

			//COLISIÓN CON LA RAQUETA
			if(posicionPelotaY == posicionRaquetaY && 
				(posicionPelotaX >= posRaquetaX && 
				posicionPelotaX <= (posRaquetaX + parseInt(raqueta.style.width))))	{
					velocidadY *= -1;
			}
		}

		/*Nuevo */
		function partidaNueva(){
			console.log("entro Partida Nueva");
			vidas--;//Disminuyo una vida

			//Defino nuevamente las posiciones
			//posicionPelotaX=Math.floor(Math.random() * ((anchoContenedor-50)-10)+ 10);//anchoFondo-50 para que no salga del marco
			//posicionPelotaY=Math.floor(Math.random() * ((altoContenedor/2)-450)+ 450);//Para que aparezca a partir de la mitad de la pantalla;
			pelota.style.left= parseInt(raqueta.style.left) + parseInt(raqueta.style.width)/2 - parseInt(pelota.style.height)/2+ "px" ;
			pelota.style.top=parseInt(raqueta.style.top) - parseInt(pelota.style.width) + "px";
			posRaquetaX="375px";// (450 es la mitad de la pantalla y 75 la mitad de la raqueta porque se colocará en la posición x e y)
			raqueta.style.left=parseInt(posRaquetaX) +"px";
			velocidadX=-3;//Para que se mueva de izquierda a derecha
			velocidadY=-3;//Para que se mueva de arriba a abajo

			//console.log("VIDAS" + vidas);
				switch(vidas){///Oculto una vida
					case 2://Cuando tengo 2 vidas oculto la imagen 3
						vida1.style.visibility="hidden";
						console.log("VIDAS" + vidas);
						break;
					case 1:
						vida2.style.visibility="hidden";
						console.log("VIDAS" + vidas);
						break;
					case 0:
						vida3.style.visibility="hidden";
						console.log("VIDAS" + vidas);
						pararPartida();
						document.removeEventListener("mousemove", moverRaquetaRaton);//Desactivo el ratón
						document.removeEventListener("keydown",tecladoDownRaqueta);//Desactivo el teclado
						document.addEventListener("click", comenzarPartida);//Volvemos a activarlo
						vida1.style.visibility="visible";
						vida2.style.visibility="visible";
						vida3.style.visibility="visible";
						vidas=3;
						puntuacion=0;
						marcador.innerHTML="Puntuacion: " + puntuacion; //Mostramos la puntuación en el tablero juego
						console.log(eliminados);
						break;
				}
		}
