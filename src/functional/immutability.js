const person = {
    name: "John",
    address: {
        country: "Nigeria",
        city: "Faith City"
    }
}
// const updatedPerson = Object.assign({}, person, {name: "Bob", age: 29})
// const updated = {...person, name: "Fiewor"} // changed this because of below
// spread does a shallow copy and so both the main object and its copy have the same address(in memory) and changing the value of one property in one reference(updated or person) will also change it in the other

// solve this by doing a deep copy as shown below
const updated = {
    ...person,
    address: {
        ...person.address, // this is basically creating a new address object by spreading all the person.address inside updated.address
        city: "Maryland" // can now comfortably and optionally replace the value of one its property
    }
    // name: "Fiewor"
}
// updated.address.city = "Maryland"
console.log(person)
console.log(updated)

// console.log(anotherUpdatedPerson)

// Summary: when working with nested objects, you have to do a deep copy