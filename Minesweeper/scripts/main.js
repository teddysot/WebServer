const $board = $('#board');

const $easy = $('#easy');
const $medium = $('#medium');
const $hard = $('#hard');

// Generate Board
function createBoard(rows, cols)
{
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
}

// Difficulty Selection
function difficulty(choice)
{
    let rows = 0;
    let cols = 0;

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
    createBoard(rows, cols)
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