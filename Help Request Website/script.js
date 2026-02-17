const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')
}

    var text = document.getElementById('text')

    var Typewriter = new Typewriter(text, {
      delay: 35,
    });

     Typewriter
          .pauseFor(200)
          .typeString("Welcome to DKA Posting Website, where you can post all the kind messages that comes to mind and more.")
          .start()