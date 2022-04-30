/* Раскрывает содержимое при нажатии на кнопку*/
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Закрыть список, при щелчке за его пределами.
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


