# Puzzle Slider

## Requirements:
1. Pass as input, any image for the puzzle app to upload to the site. This can be done with a drag and drop, or a "choose file" option, and should able to happen at any time, not just once
2. Dynamically parse the uploaded image into a 4x4 equal sized square grid leaving one corner out
3. Have a button that "shuffles" the board that can be pressed at any time. This button should NOT accidentally solve the board.
4. Be able to click on any piece and if it is able to be moved into a new spot, move that piece, otherwise, do nothing
5. If you click the final puzzle piece into place, the game should be able to display "winner" and let the user play again and also allow the user to continue clicking the puzzle pieces to let the user shuffle it themselves.
6. All image parsing must be done dynamically, including the win conditions. No hard coding
7. Picture must be different on each tile, but only ever upload one image in the public folder, not a photoshopped or cropped image.

## Objects

winningcondition = [0, 1, 2, 3....]
if item = index

clickfunction() {
    set current blank square to this square #
    set state of this square to blank
}

- Board:
    - divs with indexes 0 to 15
    - tile moveability
        get index of blank:
        # corners
        if(index === 0) {
            click on i + 1 && i + 4
        } else if(i === 3) {
            click on i - 1 & i + 4
        } else if(i === 12) {
            click on i - 4 & i + 1
        } else if(i === 15) {
            click on i - 1 & i - 4
        }
        # sides
        else if(i === 1 || i === 2) {
            click on  i - 1 & i + 4 & i + 1
        } else if(i === 4 || i === 8) {
            click on i - 4 & i + 1 & i + 4
        } else if(i === 7 || i === 11) {
            click on i - 4 & i - 1 & i + 4
        } else if( i === 13 || i === 14) {
            click on i - 1 & i - 4 & i + 1
        } 
        else {
            click on i + 1 & i - 1 & i + 4 & i - 4
        }
        
- Tiles:
    - two states, num or blank
        - if(num) has changin num state (moving array items)
            - if neighbor of blank (clickable)
                else not clickable
        - if(blank) state of blank
            - not clickable
            - use blank index to find neighbors
- Shuffle Button:
    Math.random to select index
    if(clickable) {
        click num of times
    }


- Quick Solve Button:

-----------------------------------------------------



