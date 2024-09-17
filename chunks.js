const getChunks = (arr, limit, offset = 0, acc = []) => {
    if (offset >= arr.length) {
        return acc;
    }

    return getChunks(arr, limit, offset + limit, [...acc, arr.slice(offset, offset + limit)])
};

console.log(getChunks([1,3,4,5,6,22,33,1], 2));