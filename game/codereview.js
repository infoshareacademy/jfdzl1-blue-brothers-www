for(var i = 1; 1<= 100; i++)
{
    if( i % 3 === 0 &&i%5===0) {
        console.log('FooBaz');
    }else if(i % 3 === 0) {
        console.log('Foo');
    }else if(i % 5 === 0) {
        console.log('Baz')
    }else{
        console.log(i)
    }
}