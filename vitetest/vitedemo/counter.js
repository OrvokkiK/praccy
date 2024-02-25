
export async function getTheJoke() {
  try {
        const response = await fetch ('https://api.chucknorris.io/jokes/random');
        if (!response.ok) throw new Error('Could not get the joke!');

        const editedResp = await response.json();
        const jokeIs = editedResp.value;

        console.log (jokeIs)

        const jokeElement = document.querySelector('.show_joke');
        //console.log('here');
        jokeElement.innerHTML = jokeIs;
        //console.log('here2');
        jokeElement.style.backgroundColor = 'white';
        jokeElement.style.padding = '10px';

  } catch (error) {
    console.log(error.message)
  }
}



