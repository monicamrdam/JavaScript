
const div = document.getElementById('character');


function createNode(element) {
  return document.createElement(element);
}


function append(parent, el) {
  return parent.appendChild(el);
}




/*Obtenemos datos de la api*/

fetch('https://rickandmortyapi.com/api/character/')
  .then(res => {
    return res.json();
  })
  .then(function(data) {
      let character = data.results;
      return character.map(function(character) {
         

          let divText= createNode('div');
          let divImagen= createNode('div');
          let divSpace= createNode('div');
          let img = createNode('img');
          let pNombre = createNode('p');
          let pOrigen = createNode('p');
          let pCreated = createNode('p');

          divImagen.style.display= "block";
          divImagen.style.maxWidth = "400px"; 
          divImagen.style.maxHeight = "400px";;
          divImagen.style.border='2px solid #b3ff7d';
          divImagen.style.background='#000000';
          divImagen.style.marginLeft= 'auto';
          divImagen.style.marginRight= 'auto';

          divText.style.float= "center";       
          divText.style.maxWidth = "400px"; 
          divText.style.maxHeight = "400px";; 
          divText.style.border='2px solid #b3ff7d';
          divText.style.background='#326d07';
          divText.style.textAlign='center'
          divText.style.marginLeft= 'auto';
          divText.style.marginRight= 'auto';

          

          img.src = character.image;
          img.style.maxWidth = "200px"; 
          img.style.maxHeight = "200px";; 
          img.style.display = "block"; 
          img.style.marginLeft= 'auto';
          img.style.marginRight= 'auto';
          
          pNombre.innerHTML = `Nombre: ${character.name}`;
          pOrigen.innerHTML = `Origen: ${character.origin.name} - Species: ${character.species}`;
          pCreated.innerHTML = `Created: ${character.created}`;

          append(divText, pNombre);
          append(divText, pOrigen);
          append(divText, pCreated);
          
         
          append(div, divImagen);
          append(divImagen, img);
           append(div, divText);
          append(div, divSpace);
          
          

      })
  })
  .catch(error => console.error('Error:', error));




