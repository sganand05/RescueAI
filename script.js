function redirectHome(){
    window.location.href="index.html";
}
function redirectReport(){
    window.location.href="IncidentReportForm.html";
}

function redirectEmergencyAlerts(){
    window.location.href="EmergencyAlerts.html";
}
function redirectDisGuide(){
    window.location.href="DisGuide.html";
}
function redirectLocRes(){
    window.location.href="LocalResource.html";
}


document.querySelector('.button-emKit').addEventListener('click', function() {
    document.getElementById('modal').classList.add('active');
});
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('active');
});


function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}
function hidePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}