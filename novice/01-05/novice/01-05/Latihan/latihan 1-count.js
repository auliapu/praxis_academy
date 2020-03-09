function count(obj) {
    return Object.keys(obj).length;
}

let user = {
    name : 'John',
    age : 40
};

console.log(count(user));