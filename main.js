const quotes = [
    {name: 'author 1',
    quote: 'quote 1'
    },

    {name: 'author 2',
    quote: 'quote 2'
    },

    {name: 'author 3',
    quote: 'quote 3'
    },

    {name: 'author 4',
    quote: 'quote 4'
    },

    {name: 'author 5',
    quote: 'quote 5'
    },

    {name: 'author 6',
    quote: 'quote 6'
    },
]


const quoteBtn = document.querySelector('.quoteBtn');
const quoteAuthor = document.querySelector('.quoteAuthor');
const quote = document.querySelector('.quote');

quoteBtn.addEventListener('click', displayquote);

function displayquote() {

let number = Math.floor(Math.random()*quotes.length);
quoteAuthor.innerHTML = quotes[number].name;
quote.innerHTML = quotes[number].quote;
    
}