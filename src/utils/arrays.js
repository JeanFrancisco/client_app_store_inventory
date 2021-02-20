export function orderTwoVerticalColumns(array) {
    let vertical_array = [];
    const half = Math.floor(array.length / 2);
    const odd_length = (array.length % 2 !== 0);

    for(let i = 0; i < half; i++) {
        vertical_array.push( array[i] );

        if(odd_length)
            vertical_array.push( array[ i + half + 1 ] );
        else
            vertical_array.push( array[ i + half ] );
    }

    if(odd_length)
        vertical_array.push( array[ half ] );

    return vertical_array;
}