arr = [3, 6, 2, 12 , 5, 8, 9, 1, 4, 7, 10, 11];

function insertion_sort(arr){
    for (var i = 1; i < arr.length; i++){
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    
    return arr;
}
console.log(insertion_sort(arr));