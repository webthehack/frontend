const heroBtn = document.getElementById('hero_btn');
const endBtn = document.getElementById('end_btn');

heroBtn.addEventListener('click', showMessage);
endBtn.addEventListener('click', showMessage);

function showMessage() {
      alert("You clicked me!");
    }

