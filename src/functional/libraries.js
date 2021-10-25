// libraries that offer real immutable data structures
// immutable
// immer
// mori

// normal JS code
let book = { title: "Harry Potter" }
function publish(book){
    book.isPublished = true
}
publish(book)
console.log(book)
// immutable example
import { Map } from 'immutable'
let book = Map({ title: "Harry Potter" }) //these Map objects are immutable
function publish(book){
    return book.set("isPublished", true)
}
book = publish(book)
console.log(book.toJS()) //convert it to plain JS object

// console.log(book.get("title"))

// immer
import { produce } from immer
let book = { title: "Harry Potter" }
function publish(book){
    // produce function takes a copy of the object (book) and apply the changes within the function to that copy so the initial object stays the same
    return produce(book, draftBook => {
        //book object doesn't get modified because draftBook is a proxy that records all changes made to inital book object
        draftBook.isPublished = true
    })
}
let updated = publish(book)
console.log(book)
console.log(updated)