// let counter = 1;
// while (counter < 101){
//   console.log(counter)
//   counter++;
// }



// {
//     let counter = 1;
//     do {
//         console.log(counter);
//         counter++;
//     } while (counter < 11);
// }


// {
//     for (let i=1; i<11; i++){
//         console.log(i);
//     }
// }

// {
//     function recurseMe(num){
//         if (num > 100){
//             return;
//         }
//         console.timeLog(num);
//         recurseMe(++num)
//     }

//     recurseMe(1);
// }

// {
//     [...Array(101).keys()].forEach(num=>console.log(num));
// }


// {
//     Array.from({length: 100}, (_, idx) => console.log(idx + 1));
// }

// {
//     Array.apply(null, { length: 101}).map(Number.call, Number).forEach((num) => console.log(num));
// }

// {
//     let n = 1;
//     let myInterval = setInverval(numberInterval);

//     function numberInterval(){
//         if (n > 100){
//             clearInterval(myInterval);
//         } else {
//             console.log(n);
//             n++;
//         }
//     }
// }

{
    [...'1'.padEnd(101, 1)].reduce((acc) => {
        console.log(acc);
        return ++acc;
    })
}

