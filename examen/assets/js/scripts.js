document.getElementById('donateButton').addEventListener('click', function() {
    this.remove();
});

document.querySelectorAll('.petButton').forEach(button => {
    button.addEventListener('click', function() {
        let petDiv = this.parentElement;
        let pettingsElem = petDiv.querySelector('.pettings');
        let pettings = parseInt(pettingsElem.innerText);
        pettingsElem.innerText = `${++pettings} petting(s)`;
    });
});

document.getElementById('animalType').addEventListener('change', function() {
    alert(`You are looking for a: ${this.value}`);
});
