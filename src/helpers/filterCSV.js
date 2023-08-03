// in: entire csv
// out: 100 js objects with only the data we need
function filterCSV(csv) {
  // remove the header of csv and split by new line
  let lines = csv.split("\n").slice(1);

  let ratingCounts = [];
  // split each line by ','
  // make an object wit hkey value pairs
  lines.forEach((line) => {
    let lineArr = line.split(",");
    let rating = {
      id: lineArr[0],
      title: lineArr[2],
      count: parseInt(lineArr[lineArr.length - 1]),
    };
    ratingCounts.push(rating);
  });

  // sort the list by greatest to least
  ratingCounts.sort((a, b) => b.count - a.count);

  // slice the first 100
  let top100counts = ratingCounts.slice(0, 100);
  let top100books = [];
  //  now get the lines which coresspond to id's of top 100
  top100counts.forEach((rating) => {
    //  find the line that starts with the id
    let line = lines.find((line) => line.startsWith(rating.id));
    let book = lineToObject(line.split(","));
    book = addPriceToBook(book);
    top100books.push(book);
  });
  return top100books;
}

function addPriceToBook(book) {
  // Generate a random number from 3 to 39
  let price = Math.floor(Math.random() * (39 - 3)) + 3;

  // Make sure the price ends in .99 cents
  price += +0.99;

  // Add the price to the book object
  book.price = price;

  return book;
}

function lineToObject(lineArr) {
  return {
    isbn13: lineArr[0],
    isbn10: lineArr[1],
    title: lineArr[2].replace('"', ""),
    subtitle: lineArr[3],
    authors: lineArr[4],
    categories: lineArr[5],
    thumbnail: lineArr[6],
    description: lineArr[7],
    published_year: lineArr[8],
    average_rating: lineArr[9],
    num_pages: lineArr[10],
    ratings_count: lineArr[11],
  };
}

export default filterCSV;
