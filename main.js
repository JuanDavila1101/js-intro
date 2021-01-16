// console.log("js-intro for JID ");

// function thisIsTrue(arg1, arg2) {
//     if (arg1 === 'nice' || arg2 === 'Nice') {
//         console.log(`You are ${arg1}`);
//     } else {
//         console.log('false');
//     }
// }

// function thisIsTrue(arg1, arg2, arg3) {
//     if (arg1 === 'nice' || arg2 === 'Nice') {
//         console.log(`You are ${arg1}, ${arg3}`);
//     } else {
//         console.log('false');
//     }
// }
// thisIsTrue('nice', 'Nice', 'test');


const canDrive = (age) => {
    if (age >= 15) {
        return true;
    }
    return false; // it will return undefined if you don't return the false
}
console.log(canDrive(13) ? 'you can drive' : 'you are too young');




// END