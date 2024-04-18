function interpolationSearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high && x >= arr[low] && x <= arr[high]) {
        let pos = Math.floor(low + ((high - low) / (arr[high] - arr[low])) * (x - arr[low]));
        console.log(`low es: ${low} \n high es: ${high}`);
        console.log(`La posicion a buscar es en: ${pos}`);
        if (arr[pos] === x) {
            return pos;
        } 
        else if (arr[pos] < x) {
            low = pos + 1;
        } 
        else {
            high = pos - 1;
        }
    }
    
    return -1;
}

const arr = [0,1,2,4,8,9,12,13];
const x = 4;
const resultIndex = interpolationSearch(arr, x);
if (resultIndex !== -1) {
    console.log(`${x} se encuentra en la posición ${resultIndex} del arreglo.`);
} else {
    console.log(`${x} no se encuentra en el arreglo.`);
}