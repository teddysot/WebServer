
class App
{
    constructor()
    {
        // Initialize declaration of board
        this.board =  document.querySelector('#board');
        this.rows = 10;
        this.cols = 10;

        /*document.querySelector('.col hidden')
        .addEventListener('click', event => 
        {
            console.log('col hiddden clicked');
            
        });*/

        // Difficulty Selection
        document.querySelector('#easy-menu')
        .addEventListener('click', event => 
        {
            this.difficulty(1);
        });

        document.querySelector('#medium-menu')
        .addEventListener('click', event => 
        {
            this.difficulty(2);
        });
        document.querySelector('#hard-menu')
        .addEventListener('click', event => 
        {
            this.difficulty(3);
        });
    }
    // Generate Board
    createBoard()
    {
        // Generate Field
        let container = document.querySelector("#board");
        container.innerHTML ="";
        container.innerHTML ="<h2>Board</h2>";
        for(let i = 0; i < this.rows; i++)
        {
            const $row = document.createElement(`div`);
            $row.className = `row`; 
            for(let j = 0; j < this.cols; j++)
            {
                const $col = document.createElement(`div`);
                $col.id = `c${i}-${j}`;
                $col.className = `col hidden`;
                $row.append($col);
            }
            this.board.append($row);
        }

        // Reset Button
        var btn = document.createElement(`button`);        // Create a <button> element
        var t = document.createTextNode("RESET");       // Create a text node
        btn.onmouseup = `resetBoard()`;
        btn.appendChild(t);                                // Append the text to <button>
        document.body.appendChild(btn);                    // Append <button> to <body>
    }

    // Reset board
    resetBoard()
    {
        this.createBoard();
    }

    // Difficulty Selection
    difficulty(choice)
    {
        let container = document.querySelector("#start-menu");
        container.innerHTML ="";

        if(choice == 1)
        {
            this.rows = 10;
            this.cols = 10;
        }
        else if(choice == 2)
        {
            this.rows = 20;
            this.cols = 20;
        }
        else if(choice == 3)
        {
            this.rows = 30;
            this.cols = 30;
        }
        this.createBoard();
    }
}

let app = new App();