export function getEntries() {
async function getEntries() {
    try  {
        const response = await fetch('recs.json');
        if (!response.ok) throw new Error('Records not found!')
        const data = await response.json();

        const diaryContainer = document.querySelector('.cardarea');
        diaryContainer.innerHTML = '';

        // const card = document.querySelector('.card');

        const cardImg = document.querySelector('card-img');

        const cardright = document.querySelector('card-diary');


        data.forEach(item => {
            const card = document.querySelector('.card');
            

            /*const img = document.createElement('img');
            console.log(item.address);
            image.src =  item.address;
            image.alt = item.alt;

            cardImg.appendChild(img)
            card.appendChild(cardImg);*/
            
            const date = document.createElement('p');
            date.textContent = `Date: ${item.day}`;

            const desc = document.createElement('p');
            desc.textContent = `Description: ${item.description}`;

            console.log('qui!');

            card.appendChild(date);
            card.appendChild(desc);

            diaryContainer.appendChild(card);
  
        });

        /* data.forEach(item => {
            const card = document.createElement('card');
            card.classList.add('card');

            const leftSide = document.querySelector('.card-diary');

            const img = document.createElement('img');
            img.src = 'img/gym.jpg';
            img.alt = 'Woman running';

            leftSide.appendChild(img);
            card.appendChild(leftSide);

            const date = document.createElement('p');
            date.textContent = `Date: ${item.day}`;

            const desc = document.createElement('p');
            desc.textContent = `Description: ${item.description}`;

            card.appendChild(date);
            card.appendChild(desc);

            diaryContainer.appendChild(card);
        }); */ 

    } catch (error) {
        console.log(error);
        }
    }
 getEntries();
}