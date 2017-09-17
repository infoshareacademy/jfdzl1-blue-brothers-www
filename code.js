for (var i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0)
        console.log("FuzzBuzz");

    else
        if (i % 5 == 0)
            console.log("Buzz");
        else if (i % 15 == 0)
            console.log("Fuzz");
        else
            console.log(i);


    }