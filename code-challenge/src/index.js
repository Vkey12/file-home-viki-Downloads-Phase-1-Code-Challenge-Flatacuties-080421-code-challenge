// Your code here
document.addEventListener('DOMContentLoaded', (event)=>{
    // Function to fetch characaters and iterate over them
    function getCharacters(){
          return fetch('http://localhost:3000/characters')
          .then(response => response .json()) // changes the response into a JavaScript-like object
          .then(characters => characters.forEach(character => renderCharacters(character)))
    }
      
    // Function to render characters on our application
    function renderCharacters(character) {
      let bar = document.createElement('span');
      bar.textContent = character.name; 
      bar.id= character.id 
      bar.style.cursor='pointer' 
      const div=document.getElementById('character-bar');
      div.appendChild(bar);   
      // character's data 
      bar.addEventListener('click', function displayCharacter(){
        const p= document.querySelector('#name');
        p.textContent= character.name;
        const characterImage= document.getElementById('image');
        characterImage.src= character.image;// Adds image 
        characterImage.alt= character.name;// Adds alternative 
        const currentVotes= document.getElementById('vote-count');
        currentVotes.textContent=character.votes;// Displays votes 
        let form = document.getElementById('votes-form');
        //A submit event to add in votes
        form.addEventListener('submit', (e) =>{
          e.preventDefault();
          const votes = parseInt(document.getElementById('votes').value);
          const current= parseInt(document.getElementById('vote-count').innerText);
          const currentVoteCount = votes + current
          console.log(current)
          currentVotes.innerText = currentVoteCount;  
        })
           
        //Resets to count 0 votes
        const button = document.getElementById('reset-btn')
        button.addEventListener('click', (event) => {
          event.preventDefault();
          currentVotes.textContent= 0  
        })        
      })
    }
    //Call the function and display names
    getCharacters(); 
})