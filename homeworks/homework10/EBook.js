import { Book } from "./Book.js";

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (!value) {
            console.log("Помилка: fileFormat має бути рядком і не бути порожнім");
            return;
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log(
            `Електронна книга: "${this.title}", автор: ${this.author}, рік: ${this.year}, формат: ${this.fileFormat}`
        );
    }

    static createFromBook(book, fileFormat) {
        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}