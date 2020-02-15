import ImageService from "../services/image-service.js";
import store from "../store.js";

function _draw() {
  //debugger;
  let url = store.State.image.urlLarge
  //console.log(store.State.image.url)
  document.getElementById("bg-image").style.backgroundImage = `url(${url})`
}

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    this.getImg()
    store.subscribe("image", _draw)
  }

  getImg() {
    ImageService.getImg()
  }

}
