let reSizeBtn = document.getElementById('resizeButton');

function wrapedBoxes(size) {
    const container = document.getElementById('container');
    for (let i = 0; i < size * size; i++) {
        const box = document.createElement('div');
        box.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
        box.classList.add('box');
        box.style.width = `${100 / size}%`;
        box.style.height = `${100 / size}%`;
        container.appendChild(box);
        
    
    }
}
reSizeBtn.addEventListener('click', () => {
    let newSize = prompt("Enter new size (1-100):");
    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (isNaN(newSize) || newSize < 1 || newSize > 100) {
            alert("Please enter a valid number between 1 and 100.");
            return;
        }
        const container = document.getElementById('container');
        container.innerHTML = '';
        wrapedBoxes(newSize);
    }
});