const btn = document.getElementById('button');
///aregle esto ayer
document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_7z9tx8s';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar mensaje';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar mensaje';
      alert(JSON.stringify(err));
    });

});

function mostrarProductos(id,id2){
    let element = document.getElementById(id);
    let element2 = document.getElementById(id2);
    if(element.clientHeight == "280"){
        element.style.height = "500px";
        element2.style.color = "#9854b5";
        element2.style.fontSize = "20px";
    }
    else{
        if(element.clientHeight == "500"){
            element.style.height = "280px";
            element2.style.color = "#2A7AE4";
            element2.style.fontSize = "16px";
        }
    }
    if(element.clientHeight == "690"){
        element.style.height = "1000px";
        element2.style.color = "#9854b5";
        element2.style.fontSize = "20px";
    }
    else{
        if(element.clientHeight == "1000"){
            element.style.height = "690px";
            element2.style.color = "#2A7AE4";
            element2.style.fontSize = "16px";
        }
    }
}




//const input = document.querySelector('input');
const input = document.getElementById('image_uploads');
const preview = document.querySelector('.preview');



function updateImageDisplay() {
  while(preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No se ha selecionado una imagen';
    preview.appendChild(para);
  } else {
    const list = document.createElement('ol');
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement('li');
      const para = document.createElement('p');
      if (validFileType(file)) {
        para.textContent = `Archibo de nombre: ${file.name}, Tamaño del archivo ${returnFileSize(file.size)}.`;
        const image = document.createElement('img');
        image.src = URL.createObjectURL(file);

        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `Nombre archivo ${file.name}: No es valido para cargar`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}

// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon"
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}

function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}

//-------------------------descripcion-produxtos-----------------------
/*function mostrarInfo(id) {
    let ide = 1;
    const imagen1 = ['../img/producto1.png'];
    const imagen = document.querySelector('#mostrarimg');
    if(ide == 1){

        const divi = document.createElement("div");
        const contenido = `
    <div class="info_imagen" id="mostrarimg">
    <img src="assets/img/producto1.png" width="80%" height="auto">
    </div>
    <div class="info_texto" >
    <p> Soy un texto importante</p>
    </div>
  `;
        divi.innerHTML = contenido;
        const craer = document.querySelector("[este]");
        craer.appendChild(divi);
    }
}*/

//const lista  = ["lalalalalaalal","$1000.00"]
//
//function mostrarInfo(id) {
//    let ide = 1;
//    //const imagen = document.querySelector('#mostrarimg');
//    const imagen = document.getElementById('mostrarimg');
//    if(ide == 1){
//        var img = lista[0];
//        imagen.style.backgroundImage = "url('assets/img/producto1.png')";
//        imagen.style.backgroundRepeat = "no-repeat"
//        imagen.style.backgroundSize= "100% 100%"
//        imagen.style.backgroundColor= "blue";
//
//    }
//}
