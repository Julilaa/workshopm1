// script.js

function showPage(pageId) {
    // Cacher toutes les pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
        page.classList.remove('active');
    });

    // Afficher la page sélectionnée
    document.getElementById(pageId).classList.remove('hidden');
    document.getElementById(pageId).classList.add('active');
}


// Fonction pour afficher/masquer le chatbot
function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbot-window');
    chatbotWindow.classList.toggle('hidden');
}

// Par défaut, montrer la page de scan
showPage('scan');

// Capture photo (juste un exemple)
document.getElementById('takePhotoButton').addEventListener('click', () => {
    alert('Capture de la photo du plat');
});

// Assurer que le chatbot est bien sur chaque page
function showChatbot() {
    document.querySelector('#chatbot-bubble').classList.remove('hidden');
}

// Appelle cette fonction lorsque tu charges une page
showChatbot();
