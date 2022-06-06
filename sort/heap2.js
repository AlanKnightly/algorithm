
function sort( arr){
        var n = arr.length;
        for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
            heapify(arr, n, i);
        for (var i = n - 1; i > 0; i--) {
            // Move current root to end
            var temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            heapify(arr, i, 0);
        }
    }
    function heapify(arr, n, i)
    {
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2
        if (l < n && arr[l] > arr[largest])
            largest = l;
        if (r < n && arr[r] > arr[largest])
            largest = r;
        if (largest != i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
            heapify(arr, n, largest);
        }
    }
 
    /* A utility function to print array of size n */
    function printArray(arr)
    {
        var n = arr.length;
        for (var i = 0; i < n; ++i)
          console.log(arr[i] + " ");
         
    }
 
 
    var arr =  [10,4,9,7,2,3,8,5]

    var n = arr.length;
 
    sort(arr);
 
    printArray(arr, n);
 
