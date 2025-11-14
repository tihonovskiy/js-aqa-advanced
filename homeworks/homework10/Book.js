export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    set title(value) {
        if (!value) {
            console.log("Помилка: title має бути рядком і не бути порожнім");
            return;
        }
        this._title = value;
    }

    set author(value) {
        if (!value) {
            console.log("Помилка: author має бути рядком і не бути порожнім");
            return;
        }
        this._author = value;
    }

    set year(value) {
        if (typeof value !== "number") {
            console.log("Помилка: year має бути числом");
            return;
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Книга: "${this.title}", автор: ${this.author}, рік: ${this.year}`);
    }

    static findOldestBook(books) {
        let oldest = books[0];

        for (const book of books) {
            if (book.year < oldest.year) {
                oldest = book;
            }
        }

        return oldest;
    }
}
