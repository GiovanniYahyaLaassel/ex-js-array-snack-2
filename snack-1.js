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

// // Creo funzione sommaNumeri
// const sommaNumeri = (a, b) => a + b;
// console.log(sommaNumeri(2, 5));


// // Creo un array longBooks 

const longBooks = books.filter((book) => book.pages >= 300);
console.log(longBooks)

// // Creo un array longBooksTitles

const longBooksTitles = longBooks.map((book) => book.title);
console.log(longBooksTitles);

// Stampo in console ogni titolo nella console

longBooksTitles.forEach((titolo) => console.log(titolo));