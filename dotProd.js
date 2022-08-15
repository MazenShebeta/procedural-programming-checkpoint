var v1 = [1, 0, 3];
var v2 = [0, 5, 0];

function dot_product(v1, v2){
    var sum = 0;
    for (var i = 0; i < v1.length; i++){
        sum += v1[i] * v2[i];
    }
    return sum;
}

if(dot_product(v1, v2) == 0){
    console.log("two vectors are orthogonal");
}
console.log("sum = " + dot_product(v1, v2));
