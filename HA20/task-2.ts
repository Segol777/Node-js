class Library {
  static totalBooks: number = 0;

  addBook(): void {
    Library.totalBooks++
  }

  static getTotalBooks(): number {
    return Library.totalBooks
  }
}

const library1 = new Library()
const library2 = new Library()

library1.addBook()
library1.addBook()

library2.addBook()

console.log(Library.getTotalBooks())

library1.addBook()

console.log(Library.getTotalBooks())
