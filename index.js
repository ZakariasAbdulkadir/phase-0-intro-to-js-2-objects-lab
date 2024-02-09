// Write your solution in this file!
const employee = {
    streetAdress: 'k', 
    name: "zak"
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key] : value,
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}
function deleteFromEmployeeByKey(obj, key) {
    const copy = {
        ...obj,
    }
    delete copy[key]
    return copy
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj
}
