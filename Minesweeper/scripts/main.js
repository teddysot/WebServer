const $board = $('#board');

const $easy = $('#easy');
const $medium = $('#medium');
const $hard = $('#hard');
$rows = 10;
$cols = 10;

// Generate Board
function createBoard()
{
    // Generate Field
    let container = document.getElementById("board");
    container.innerHTML ="";
    container.innerHTML ="<h2>Board</h2>";
    for(let i = 0; i < rows; i++)
    {
        const $row = $('<div>').addClass('row');
        for(let j = 0; j < cols; j++)
        {
            const $col = $('<div>')
            .addClass('col hidden');
            $row.append($col);
        }
        $board.append($row);
    }

    // Reset Button
    var btn = document.createElement("BUTTON");    
    var t = document.createTextNode("RESET");   
    btn.appendChild(t);                         
    document.body.appendChild(btn);                  
    
    btn.onclick = function()
    {
        resetBoard();
    }
}

// Reset board
function resetBoard()
{
    createBoard();
}

// Difficulty Selection
function difficulty(choice)
{
    let container = document.getElementById("start-menu");
    container.innerHTML ="";

    if(choice == 1)
    {
        rows = 10;
        cols = 10;
    }
    else if(choice == 2)
    {
        rows = 20;
        cols = 20;
    }
    else if(choice == 3)
    {
        rows = 30;
        cols = 30;
    }
    createBoard();
}

// On click events
$easy.on('click', function()
{
    difficulty(1);
})

$medium.on('click', function()
{
    difficulty(2);
})

$hard.on('click', function()
{
    difficulty(3);
})

$board.on('click', '.col.hidden', function()
{
    console.log($(this));
})