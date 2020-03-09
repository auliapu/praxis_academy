function unique(arr) {
    return Array.from(new Set(arr));
} 

let values = ["Haru", "Khrisna", "Haru", "Khrisna", "Khrisna", "Khrisna", "Haru", "Haru", ":-O"];

console.log( unique(values) ); 