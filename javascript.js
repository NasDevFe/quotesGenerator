var quotes = [
"We become what we think about. <br> <br>  - Earl Nightingale",
"People who are crazy enough to think they can change the world are the ones who Do.  <br> <br>  - Rob Siltanen",
"All our dreams can come we have the courage to pursue them.  <br> <br>   - Walt Disney",
"Success is not final, failure is not Fatal it is the courage to Continue That counts.  <br> <br>  - Winston Churchill",
"Your life only gets better when you get better.  <br> <br>  - Brian Tracy",
"Be the change That you wish to see In the world.  <br> <br>  - Mahatma Ghandi",
"If I cannot Do great things, I can Do small things In a great way.  <br> <br>  - Martin Luther King Jr",
"Keep your face always toward the sunshine and shadows will fall behind you.  <br> <br>  - Walt Whitman",
"We may encounter many defeats but we must not be defeated.  <br> <br>  - Maya Angelou",
"Life isn\’t about finding yourself. Life is about creating yourself.  <br> <br>  - George Bernard Shaw"
]

function newQuote(){
	var randonNumber = Math.floor( Math.random() * (quotes.length) )
		document.getElementById("quoteDisplay").innerHTML = quotes[randonNumber];
}
