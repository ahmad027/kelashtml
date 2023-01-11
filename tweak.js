console.log("starting tweak");

const wrapper = document.getElementById("wrapper");
const product1 = document.getElementById("product1");
const newBox = document.getElementById("newBox");
const productBox1 = document.getElementById("productBox1");
const productBox2 = document.getElementById("productBox2");
const buttonBack = document.getElementById("buttonBack");
const topItem = document.getElementById("topItem");

function getDetail(nomor) {
  console.log("produk :", nomor);

  newBox.style.display = "block";
  wrapper.style.display = "none";

  if (nomor === 1) {
    productBox1.style.display = "flex";
    topItem.style.display = "none";
  } else if (nomor === 2) {
    productBox2.style.display = "flex";
    topItem.style.display = "none";
  }
}

function callBack(nomor) {
  if (nomor === 1) {
    console.log("back di klik");
    productBox1.style.display = "none";
    wrapper.style.display = "flex";
  } else if (nomor === 2) {
    console.log("back di klik");
    productBox2.style.display = "none";
    wrapper.style.display = "flex";
  }
}
