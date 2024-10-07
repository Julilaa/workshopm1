// script.js

// Fonction pour montrer une page et cacher les autres
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');
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
