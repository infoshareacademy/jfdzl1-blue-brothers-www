var i;
for (i = 1; i <= 100; i++) {
    var m3 = i % 3 === 0;
    var m5 = i % 5 === 0;
    if (m3 && m5) {
        console.log('FizzBuzz');
    } else if (m3) {
        console.log('Fizz');
    } else if (m5) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}