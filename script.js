let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');
var typed = new Typed(".auto-type",{
    strings:["Epulz","TPGIT"],
    typeSpeed:150,
    backSpeed:150,
    loop:true

})
function downloadPDF() {
    // Specify the path to your PDF file
    var pdfUrl = './Adobe Scan 13-Jun-2023.pdf';

    // Create a link element
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Souvenir.pdf';

    // Trigger the click event
    link.click();
}
function openPDF() {
    // Specify the path to your PDF file
    var pdfUrl = './Adobe Scan 13-Jun-2023.pdf';

    // Create a link element
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank'; // Open in new tab

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event
    link.click();

    // Remove the link from the body (optional)
    document.body.removeChild(link);
}

let lengthItems = items.length - 1;
let active = 0;


next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

