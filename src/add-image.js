import kiwi from "./kiwi.jpg";
import sample from "./sample.jpg";
function addImage() {
  const kiwiImg = createImage({ alt: "Kiwi", src: kiwi });
  const sampleImg = createImage({ alt: "Sample", src: sample });
  document.body.append(kiwiImg, sampleImg);
}

function createImage({ alt, src }) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.width = 300;
  return img;
}
export { addImage };
