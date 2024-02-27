import './style.css'
import './oma-style.css'

/* import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg' */
import { getTheJoke } from './counter.js'
import { showPics } from './showpics.js'
import { getEntries } from './diaryentries.js'

document.querySelector('#app').innerHTML = `
<h3> Tehtävät </h3>
`
// console.log('Täällä');
var element = document.getElementsByClassName('show_joke');
// console. log('Täälläkin');

document.querySelector('.chuck').addEventListener('click', () => {
    getTheJoke(); 
});


showPics(document.querySelector('.cats'));



document.querySelector('.diary').addEventListener('click', () => {
    getEntries();
}); 
