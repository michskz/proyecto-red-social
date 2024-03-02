function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value;
    
    if (message.trim() === '') {
        alert('Por favor, escribe un mensaje');
        return;
    }
    
    var messageList = document.getElementById('message-list');
    var newMessage = document.createElement('div');
    newMessage.textContent = message;
    newMessage.className = 'message sender'; // El remitente es el usuario actual
    
    messageList.appendChild(newMessage);
    
    // Guardar el mensaje en el almacenamiento local del navegador
    var messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ content: message, sender: 'user' }); // 'user' como remitente para los mensajes enviados por el usuario
    localStorage.setItem('messages', JSON.stringify(messages));
    
    // Limpiar el campo de entrada de mensajes
    messageInput.value = '';
}

// Función para cargar los mensajes almacenados localmente al cargar la página
window.onload = function() {
    var messageList = document.getElementById('message-list');
    var messages = JSON.parse(localStorage.getItem('messages')) || [];

    messages.forEach(function(message) {
        var newMessage = document.createElement('div');
        newMessage.textContent = message.content;
        newMessage.className = 'message ' + (message.sender === 'user' ? 'sender' : 'receiver');
        messageList.appendChild(newMessage);
    });
};