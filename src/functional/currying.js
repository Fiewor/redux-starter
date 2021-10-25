function add(a){
    return function (b){
        console.log(a)
        return a + b
    }
}

const addition = a => b => a + b

const added = add(1)(2)
console.log(addition(5)(5));
console.log(added);