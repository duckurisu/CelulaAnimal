function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    localStorage.setItem('popupClosed', 'true');
}

document.getElementById('closePopup').onclick = closePopup;

window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        closePopup();
    }
};

if (!localStorage.getItem('popupClosed')) {
    window.onload = openPopup;
}