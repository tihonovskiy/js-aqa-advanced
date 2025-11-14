import {Book} from "./Book.js";
import {EBook} from "./EBook.js";

const book1 = new Book("Мистецтво програмування", "Дональд Кнут", 1968);
const book2 = new Book("Чистий код", "Роберт Мартін", 2008);

const ebook1 = new EBook("JavaScript для початківців", "Іван Петренко", 2020, "PDF");
const ebook2 = EBook.createFromBook(book2, "EPUB");

book1.printInfo();
book2.printInfo();
ebook1.printInfo();
ebook2.printInfo();

const allBooks = [book1, book2, ebook1, ebook2];

const oldestBook = Book.findOldestBook(allBooks);
console.log("Найдавніша книга:");
oldestBook.printInfo();

ebook1.fileFormat = "MOBI";
console.log("Після зміни формату електронної книги:");
ebook1.printInfo();