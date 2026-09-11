const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "Marilyn Monroe" 
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain"
    },
    {
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou"
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    } 
];

const blockquote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

const fetchQuote = () => {
    const getQuote = quotes[Math.floor(Math.random() * quotes.length)];
    blockquote.textContent = getQuote.quote;
    author.textContent = getQuote.author;
}
newQuoteButton.addEventListener('click', () => {
    fetchQuote();
});

fetchQuote();