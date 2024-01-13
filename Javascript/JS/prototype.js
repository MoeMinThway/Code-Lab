function Megazine(title,author,year){
    this.title=title
    this.author=author
    this.year=year
    // this.getTitle=function(){
    //     return `Title is ${this.title} written by ${this.author} at ${this.year} years`
    // }
}

Megazine.prototype.getTitle=function(){
    return `Title is ${this.title} written by ${this.author} at ${this.year} years`
}

Megazine.prototype.getYear=function(){
    const year =new Date().getFullYear () - this.year
    console.log(year);
}

var mega =new Megazine("English","Mg Mg ","2000")

// console.log(mega.getTitle());

console.log(mega.getYear());