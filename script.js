const reSizeBtn = document.getElementById('resizeButton');

function wrapedBoxes(size) {
    const container = document.getElementById('container');
    for (let i = 0; i < size * size; i++) {
        const box = document.createElement('div');
            box.addEventListener('mouseover', (e) => {
                if (!e.target.style.backgroundColor) {
                e.target.style.backgroundColor = getRandomColor();
                e.target.style.opacity = "0.1";
                return;
                }
    
                let x = parseFloat(e.target.style.opacity);
            
                if (x < 1) {
                    x += 0.1;
                    e.target.style.opacity = x.toString(); 
                }
            });
        box.classList.add('box');
        box.style.width = `${100 / size}%`;
        box.style.height = `${100 / size}%`;
        container.appendChild(box);
        
    
    }
    
}
wrapedBoxes(16);

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

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
    
}