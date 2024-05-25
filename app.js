const form = document.querySelector("form");
const gallery = document.querySelector(".img-container");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
        
 const data = Object.fromEntries(formData);

 if(!data.imgUrl) return

  const { imgUrl } = data;

  createImage(imgUrl);
  
  e.target.reset();
})

const createImage = (imgUrl) => {
  const imgTag = document.createElement("img");

  imgTag.src = imgUrl;

  gallery.appendChild(imgTag)
}




