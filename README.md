Overview/Description of Project
Live Link to the hosted project
Screenshots/GIFs of project features
1-2 Code Snippets showing something you did

# JavaScript Project 

The user can make the saucy kid on the screen run avoiding birds 
which appear on the screen. 

[play here](https://naokosugawara.github.io/JS_project/)

![screenshot](./docs/screenshots/saucy_kid_runner.png)

## Overview

The user can make the charactor on the screen run avoiding obstacles 
which appear on the screen. 
The game will show how far the caractor goes as it keeps running. 


## Functionality 

1. First, there are these features on the screen : 

   - start button
   - charactor 
   - horizontal line where the charactor run on
   - counter to show how many time the charactor hits the obstacles
   - score to show how far the charactor goes 

2. Once the user clicks the start button, the charactor starts running.

3. As the charactor keeps running, some obsticles will appear.  

4. To avoid each obstacle, the user must hit the space key to make the charactor jump.

5. When the charactor wasn't able to avoid the obstacle, it'll increase the counter by one 

6. Once the counter reaches 5, then it'll let the user know that game is over. 


### Animation Rendering

A `Player` class, it basically keeps falling unless it reaches to the bottom.

```javascript

// Make dimensions relative sizes so can scale
    movePlayer() { 
        // It keeps falling unless the players bottom reaches to the bottom 
        if (!this.collision && this.position.y + this.height + this.velocity.y < this.canvas.height - 140) {
            this.velocity.y += this.gravity;
        } else {
            // Once the player reaches to the bottom, it'll stop falling
            this.velocity.y = 0;
        }
        // console.log(this.velocity);
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
    }
```


Also in a `Player` class, animate the charactor using sprite sheet.

```javascript
    drawPlayer() {
        // If collides, no update for the charactor movement
        if (!this.collision) {
            if (this.oldTime === 0) {
                this.img.src = `./src/img/running${this.frame}.png`; 
                // debugger;
                this.frame = (this.frame + 1) % 4 || 4;
            } else if (this.oldTime > this.delta) {
                this.oldTime = -1;
            } 
            this.oldTime += 1;
        }
        this.drawImage()
    }
```


### Wireframes




### Technologies, Libraries, APIs

Vanilla JS, HTML, CSS, Canvas

---

