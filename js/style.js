

const warna = document.getElementById('warna');

document.getElementById('warna').addEventListener('input', function(event) {
    document.body.style.backgroundColor = event.target.value;
});