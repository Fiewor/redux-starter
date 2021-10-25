import {compose, pipe} from 'lodash/fp'

let input = "   JavaScript   "
let output = "<div>" + input.trim() + "</div>"
 
let trimmer = str => str.trim()
let toLowerCase = str => str.toLowerCase()
let wrapify = type => str => `<${type}>${str}</${type}>`

let transform = compose(divify, toLowerCase, trimmer)
transform(input)

// pipe builds a pipeline such that the output of one function ends up as the input of the next function
let otherTransform = pipe(trimmer, toLowerCase, wrapify('div'))
otherTransform(input)

// let result = divify(toLowerCase(trimmer(input )))
console.log(result);
