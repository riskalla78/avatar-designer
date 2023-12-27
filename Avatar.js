import html2canvas from "./node_modules/html2canvas/dist/html2canvas.esm.js";
/**
 * Classe responsável pela imagem embutida a ser customizada
 * @class
 */
export default class Avatar {
  #avatar;
  /**
   * @constructor
   * @param {string} url
   * @param {number} btn
   */

  constructor(url, btn) {
    this.url = url;
    this.btn = btn;
    this.#avatar = document.querySelector("#avatar");
  }

  /**
   * Renderiza a imagem no html ao clicar em algum dos botões
   */
  renderImg() {
    const btn = document.querySelector(`#btn${this.btn}`);

    btn.addEventListener("click", () => {
      this.#avatar.setAttribute("src", this.url);
      const alerta = document.querySelector("#alerta");
      if (alerta.style.display === "initial") {
        alerta.style.display = "none";
      }
    });
  }
  /**
   * Função estática que usa o slider para mudar o border-radius do avatar,
   * por meio de estilização inline dinâmica
   * @param {object} avatar
   */
  static changeBorderRadius(avatar) {
    const radius = document.querySelector("#radiusRange");
    radius.addEventListener("change", () => {
      const currentStyle = avatar.style.cssText || "";

      avatar.style.cssText = `${currentStyle} border-radius: ${radius.value}%`;
    });
  }

  /**
   * Adiciona um ouvinte de evento para o input de cor para alterar a cor da borda
   * @param {object} avatar
   */
  static changeBorderColor(avatar) {
    const color = document.querySelector("#border-Color");
    console.log(color.value);
    color.addEventListener("input", () => {
      const currentStyle = avatar.style.cssText || "";
      avatar.style.cssText = `${currentStyle} border: 5px solid ${color.value}`;
      console.log(color.value);
    });
    console.log(color.value);
  }
  /**
   * Função que carrega a borda da imagem assim que a página carregar
   */
  static onload(avatar) {
    const color = document.querySelector("#border-Color");
    avatar.style.border = `5px solid ${color.value}`;
  }
  /**
   * Utilza a biblioteca htm2canvas para criar um screenshot do elemento avatar e permitir seu download
   */
  static downloadImage() {
    const avatarElement = document.querySelector("#avatar");
    const downloadBtn = document.querySelector("#downloadBtn");

    downloadBtn.addEventListener("click", (event) => {
      event.preventDefault();
      if (avatarElement) {
        html2canvas(avatarElement, {
          scale: 10, // Ajuste conforme necessário para melhor qualidade
          backgroundColor: null, // Preserva o fundo transparente
        }).then((canvas) => {
          const dataURL = canvas.toDataURL("image/png");
          //adiciona um link temporariamente ao body e simula um clique para permitir o download
          const link = document.createElement("a");
          link.download = "avatar.png";
          link.href = dataURL;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
      } else {
        console.error("Avatar não encontrado");
      }
    });
  }
}
