import Avatar from "./Avatar.js";

/**
 * responsável pelas imagens upadas
 */
export default class UpAvatar extends Avatar {
  /**
   * renderiza a imagem carregada, utilizando a função handlefile
   */
  renderImg() {
    document
      .querySelector("#chooseFile")
      .addEventListener("change", this.#handleFileSelect);
  }
  /**
   * utiliza a API fileReader para ler o input file e renderizar a imagem
   * @param {*} event
   * @private
   */
  #handleFileSelect(event) {
    const fileInput = event.target;
    const files = fileInput.files;

    if (files.length > 0) {
      const file = files[0];
      const allowedExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
      const fileName = file.name;
      const fileExtension = fileName.split(".").pop().toLowerCase();
      console.log("Nome do arquivo:", fileName);
      console.log("Extensão do arquivo:", fileExtension);
      if (allowedExtensions.includes(fileExtension)) {
        const reader = new FileReader();

        reader.onload = function (e) {
          const previewImage = document.querySelector("#avatar");
          previewImage.src = e.target.result;
          localStorage.setItem("AvatarImg", e.target.result);
        };

        reader.readAsDataURL(file);
        if (alerta.style.display === "initial") {
          alerta.style.display = "none";
        }
      } else {
        const alerta = document.querySelector("#alerta");
        alerta.style.display = "initial";
        alerta.textContent = "Você deve selecionar um arquivo de imagem";
        fileInput.value = "";
      }
    }
  }
  static loadStoredAvatar() {
    const storedAvatar = localStorage.getItem("AvatarImg");
    if (storedAvatar) {
      const previewImage = document.querySelector("#avatar");
      // Criando um objeto Image para pré-carregar a imagem salva
      const savedImage = new Image();
      savedImage.onload = function () {
        // Define a src do elemento img para a imagem salva
        previewImage.src = savedImage.src;
      };
      previewImage.src = storedAvatar;
    }
  }
}
