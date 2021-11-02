      var tileMap01 = {
        width: 19,
        height: 16,
        mapGrid: [
          [
            [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
          ],
          [
            [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
          ],
          [
            [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
          ],
          [
            [" "], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
          ],
          [
            [" "], [" "], [" "], [" "], ["W"], [" "], [" "], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
          ],
          [
            [" "], [" "], [" "], [" "], ["W"], ["B"], [" "], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
          ],
          [
            [" "], [" "], ["W"], ["W"], ["W"], [" "], [" "], ["B"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
          ],
          [
            [" "], [" "], ["W"], [" "], [" "], ["B"], [" "], ["B"], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
          ],
          [
            ["W"], ["W"], ["W"], [" "], ["W"], [" "], ["W"], ["W"], [" "], ["W"], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"],
          ],
          [
            ["W"], [" "], [" "], [" "], ["W"], [" "], ["W"], ["W"], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], ["G"], ["G"], ["W"],
          ],
          [
            ["W"], [" "], ["B"], [" "], [" "], ["B"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ["G"], ["G"], ["W"],
          ],
          [
            ["W"], ["W"], ["W"], ["W"], ["W"], [" "], ["W"], ["W"], ["W"], [" "], ["W"], ["P"], ["W"], ["W"], [" "], [" "], ["G"], ["G"], ["W"],
          ],
          [
            [" "], [" "], [" "], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"],
          ],
          [
            [" "], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
          ],
          [
            [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
          ],
          [
            [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
          ],
        ],
      };
      

      var map = document.getElementById("map");

      var xposition = -1;
      var yposition = -1;
      
      generatemap();
      function generatemap() {
        while (map.firstChild) {
          map.removeChild(map.lastChild);
        }
        for (let y = 0; y < tileMap01.height; y++) {
          let parent = document.createElement("div");
          for (let x = 0; x < tileMap01.width; x++) {
            var tile = tileMap01.mapGrid[y][x];
            if (tile == " ") tile = "[ ]"
            var child = document.createElement("span");
            if(tileMap01.mapGrid[y][x] == ""){
              child.classList.add("space");
            }
            else if(tileMap01.mapGrid[y][x] == "w"){
              child.classList.add("wall");
            }
            else if(tileMap01.mapGrid[y][x] == "G"){
              child.classList.add("goal");
            }
            else if(tileMap01.mapGrid[y][x] == "B"){
              child.classList.add("block");
            }
            else if(tileMap01.mapGrid[y][x] == "P"){
              child.classList.add("character");
              yposition = y;
              xposition = x;
            }
            
            child.innerHTML = tile;
            child.setAttribute("id", "x" + x + "y" + y);
            parent.appendChild(child);
          }
          map.appendChild(parent);
        }
      }
      
      keysPressed();
      function keysPressed() {
        document.addEventListener('keydown', movePlayer);
      }
      
      
      function movePlayer(e) {
        e.preventDefault();
        var moveX = xposition;
        var moveY = yposition;
      
        if (e.keyCode == 37) {
          moveX -= 1;
        }
        else if (e.keyCode == 39) {
          moveX += 1;
        }
        else if (e.keyCode == 38) {
          moveY -= 1;
        }
        else if (e.keyCode == 40) {
          moveY += 1;
        }
        if (moveX <= tileMap01.width - 1 && moveX >= 0 && moveY <= tileMap01.height - 1 && moveY >= 0) {
          if (tileMap01.mapGrid[moveY][moveX] != "W") {
            tileMap01.mapGrid[yposition][xposition] = " ";
            xposition = moveX;
            yposition = moveY
            tileMap01.mapGrid[moveY][moveX] = "P";
            generatemap();
          }
        }
      }

