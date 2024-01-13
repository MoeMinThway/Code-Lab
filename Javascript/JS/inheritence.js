function Megazine(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    // this.getTitle=function(){
    //     return `Title is ${this.title} written by ${this.author} at ${this.year} years`
    // }
}

Megazine.prototype.getTitle = function () {
    return `Title is ${this.title} written by ${this.author} at ${this.year} years`
}

Megazine.prototype.getYear = function () {
    const year = new Date().getFullYear() - this.year
    return `Title is ${this.title} written by ${this.author} at ${this.year} years`
}

function News(title, author, year, month) {
    Megazine.call(this, title, author, year)//inh
    this.month = month
}
News.prototype = Object.create(Megazine.prototype) //inh


var page = new News("Myanmae", "a ", "b", "2021")
//console.log(page);



console.log(page.getYear())