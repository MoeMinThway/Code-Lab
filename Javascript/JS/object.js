class Book{
    constructor (title,author,year){
        this.title=title
        this.author=author
        this.year=year
    }
    setTitle(){
        this.title="Myanmae"
    }
    static show(){
        console.log("Hello");
    }
    greeting(){
        console.log("Hiiiii");
    }
}

class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year)
        this.month=month
    }
}

var mega =new Magazine("oop","aung aung",2010,"Auguest")
console.log(mega.greeting())
// console.log(Magazine.show());

// var book1 =new Book("English","Mg Mg ",2000)
// // console.log(book1)

// book1.setTitle();
// // console.log(book1)
// book1.greeting(); //nonstatic

// Book.show();//static obj name

// const book = {
//     title: 'java',
//     year: '2021',
//     getTitle: function () {
//         return `Title is ${this.title}`
//     }
// }
// book.title="Angular" 
// console.log(book);

// var book1 = Object.create(book)
// console.log(book1);


// var book1 = Object.create(book, {
//     title: { value: 'Myanmar' },
//     year: { value: 2022 }
// })
// console.log(book1);