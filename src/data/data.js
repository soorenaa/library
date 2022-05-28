let books = [
  {
    name: "مزرعه ی حیوانات",
    number: 21,
    amount: "50,000",
    due: "1401/01/12",
  },
  {
    name: "1945",
    number: 22,
    amount: "65,000",
    due: "1400/12/22",
  },
  {
    name: "نبرد من",
    number: 23,
    amount: "42,000",
    due: "1400/08/03",
  },
  {
    name: "عادت های اتمی",
    number: 24,
    amount: "75,000",
    due: "1399/01/12",
  },
  {
    name: "ذهن نا محدود",
    number: 25,
    amount: "52,000",
    due: "1401/02/14",
  },
];

export const getBooks = () => {
  return books;
};


export const getBook = (number) => {
  return books.find(book =>
    book.number === number
  )
};

export const deleteBook = (number) => {
  books = books.filter(
    (book) => 
      book.number !== number
    
  );
}

