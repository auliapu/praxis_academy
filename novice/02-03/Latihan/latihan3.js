// const x = {
//     val: 2
// };

// const x1 = () => x.val += 1;
// const x2 = () => x.val *= 2;

// x1();
// x2();

// console.log(x.val);

// const y = {
//     val: 2
// };

// const y1 = () => y.val += 1;
// const y2 = () => y.val *= 2;

// y1();
// y2();

// console.log(y.val);

//contoh 2
const x = {
    val: 2
};

const x1 = x => Object.assign({}, x, { val: x.val + 1});
const x2 = x => Object.assign({}, x, { val: x.val * 2});

console.log(x1(x2(x)).val);

const y = {
    val: 2
};

x2(y);
x1(y);

console.log(x1(x2(y)).val);
