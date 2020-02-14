import Image from "../models/image.js"

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  getImg() {
    imgApi.get("")
      .then(res => {
        let img = new Image(res.data)
        //let img = res.data
        console.log(img)
      })
  }
}

const imageService = new ImageService();
export default imageService;
