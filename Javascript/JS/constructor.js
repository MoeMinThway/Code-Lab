
//litral//obj
const book={
    title:'88',
    year:'2021',
    getTitle :function(){
        return `Title is ${this.title}`
    }
}
book.title="CC"
console.log(book)

//constructor
function Megazine(title,author,year){
    this.title=title
    this.author=author
    this.year=year
    this.getTitle=function(){
        return `Title is ${this.title}`
    }
}
book.title="CC"
console.log(Megazine)

var mega =new Megazine("English","Mg Mg ","2021")

console.log(mega.getTitle);