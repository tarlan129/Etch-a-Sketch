# Etch-a-Sketch

Fourth project from The Odin Project Foundations course. An interactive, browser-based drawing board (pixel art grid) that dynamically generates drawing canvases and allows progressive color shading based on user interactions.

## What I Learned

This project pushed my DOM manipulation, grid calculation, and event handling skills to a more advanced level. Through this iterative development, I worked with:

- **Dynamic Grid Generation:** Creating flexible layouts using JavaScript `for` loops combined with CSS Flexbox (`flex-wrap: wrap`) to mathematically calculate element dimensions (`100 / size %`).
- **Advanced Event Handling:** Working with the `mouseover` event instead of standard click events to create a seamless "hover-to-draw" user experience.
- **State & Shading Logic (Opacity):** Implementing progressive shading where a square locks its random color on the first touch and darkens incrementally (+10% opacity) on each subsequent pass.
- **UI & Layout Control:** Utilizing CSS Flexbox (`flex-direction: column` and `gap`) to perfectly center the application layout vertically and horizontally on the viewport without layout shifting.
- **Git Workflows (Branch Management):** Experiencing the practical necessity of Git branching. Testing creative (and sometimes chaotic) UI ideas on separate feature branches before safely merging the refined logic back into `main`.

## How to Play

1. Open `index.html` in your browser.
2. Hover your mouse over the grid squares to begin drawing. 
3. Each square will pick a unique random color on your first hover, and will get 10% darker every time you cross over it again.
4. Click the **Resize Button** at the top to enter a new grid size (between 1 and 100) to clear the board and start a new canvas!

## Pseudocode

START application
  Initialize grid container
  Set default size = 16
  Generate grid (size * size squares)

  WHEN squares are generated:
    Apply 'box-sizing: border-box' and light borders in CSS for visibility
    
  LISTEN for 'mouseover' on each square:
    IF square has no background color yet:
      Assign a unique random RGB color
      Set opacity to 0.1 (10%)
    ELSE IF opacity < 1.0:
      Increase current opacity by 0.1 (darken by 10%)

  LISTEN for click on 'Resize Button':
    Prompt user for newSize (1-100)
    IF newSize is valid:
      Clear current grid container
      Generate grid using newSize
END application

# Technologies Used
HTML5 (Semantic structure)

CSS3 (Flexbox centering, dynamic layout, border rendering)

JavaScript (ES6+) (Dynamic DOM creation, event monitoring, arithmetic parsing)

Git / GitHub (Branching, refactoring, and version synchronization)

# Live Preview
https://tarlan129.github.io/Etch-a-Sketch/