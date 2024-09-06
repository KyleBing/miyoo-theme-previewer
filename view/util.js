import transparentImg from "./components/transparentImg.js";

function onImgError(event){
    event.target.src = transparentImg
    event.target.removeEventListener('error', onImgError);
}
export {
    onImgError
}
