const books = [
  { 
	  title: "React Billionaire", 
	  pages: 250, 
	  author: {
		  name: 'Alice',
		  age: 35
	  },
	  available: false,
	  price: '101€',
	  tags: ['advanced', 'js', 'react', 'senior']
  },
  { 
	  title: "Advanced JS", 
	  pages: 500, 
	  author: {
		  name: 'Bob',
		  age: 20
	  },
	  available: true,
	  price: '25€',
	  tags: ['advanced', 'js', 'mid-senior']
  },
  { 
	  title: "CSS Secrets", 
	  pages: 320, 
	  author: {
		  name: 'Alice',
		  age: 17
	  },
	  available: true,
	  price: '8€',
	  tags: ['html', 'css', 'junior']
  },
  { 
	  title: "HTML Mastery", 
	  pages: 200, 
	  author: {
		  name: 'Charlie',
		  age: 50
	  },
	  available: false,
	  price: '48€',
	  tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];

// Creare un array (availableBooks) che contiene tutti i libri disponibili.

const availableBooks = books.filter((book) => book.available === true);
// console.log(availableBooks);

// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
 const discountedBooks = availableBooks.map((book) => {
    const priceString = book.price.replace("€", "");
    const priceNumber = Number(priceString);
    const discountedPrice = priceNumber * 0.8;
    const finalPrice = discountedPrice.toFixed(2) + "€";

    return {
        ...book,
        price: finalPrice
    };
 });
// console.log(discountedBooks);

//  Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
const fullPricedBook = discountedBooks.find((book) => {
    const priceString = book.price.replace("€","");
    const priceNumber = Number(priceString);
    const integerNumber = Number.isInteger(priceNumber);
    
    return  integerNumber
});
console.log(fullPricedBook);