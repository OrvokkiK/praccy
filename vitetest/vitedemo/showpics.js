export function showPics(element) {
async function showPics() {
    try {
        // fetch
        const response = await fetch('pics.json');
        if (!response.ok) throw new Error('Huono haku!!');
        const images = await response.json();
  
        console.log(images);
        console.log('Tehdään loopissa');
  
        // luodaan yksi figure
        // haetaan ensin elementti johon haluat että kuvat lisätään
        const cards = document.querySelector('#catcards');
        cards.innerHTML = '';
  
        // loopataan kaikki kissakuvat läpi ja generoidaan
        // jokaisesta figure, img ja figcaption elementit
        images.forEach((item) => {
          console.log(`Nimi: ${item.name}`);
  
          // luo uusi figure elementti
          const figure = document.createElement('figure');
          cards.appendChild(figure);
  
          // luodaan img elementti
          const image = document.createElement('img');
          image.src = item.address;
          image.alt = item.name;
  
          figure.appendChild(image);
  
          // luodaan figcaption elementti
          const figurecaption = document.createElement('figurecaption');
          // luodaa teksti figcaptionin sisälle
          const node = document.createTextNode(item.description);
          // lisätää se figcaptionin lapseksi
          figurecaption.appendChild(node);
  
          figure.appendChild(figurecaption);
        });
  
        // kommentti
      } catch (error) {
        console.log(error);
      }
    }
  
    console.log(element);
    //element.addEventListener('click', () => modifyHTMLPics());
    element.addEventListener('click', () => showPics());


}