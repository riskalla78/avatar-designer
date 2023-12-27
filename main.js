import Avatar from "./Avatar.js";
import UpAvatar from "./UpAvatar.js";

/**
 * div em que se encontra a imagem
 */
const avatar = document.querySelector("#avatar");
/**
 * Função que carrega a borda da assim que a página carregar
 */
window.onload = UpAvatar.loadStoredAvatar();
/**
 * Carrega a borda da imagem
 */
window.onload = Avatar.onload(avatar);
/**
 * Instancia a classe Avatar em cada um dos botões para renderizar a imagem ao clicar neles
 */
const btn1 = new Avatar("assets/FnXdI18XoAE3Cvr.webp", 1);
btn1.renderImg();

const btn2 = new Avatar("assets/munchkincat.jpg", 2);
btn2.renderImg();

const btn3 = new Avatar("assets/snj-1411-275.jpg", 3);
btn3.renderImg();

/**
 * instancia a classe da imagem carregada e a renderiza
 */
const upload = new UpAvatar();
upload.renderImg();
/**
 * altera as propriedades da bords
 * */
Avatar.changeBorderRadius(avatar);
Avatar.changeBorderColor(avatar);

Avatar.downloadImage();
