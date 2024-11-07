export default {
  forEachScratch(arr, fn) {
    //   for (let i = 0; i < arr.length; i++) {
    //     const value = arr[i];
    //     fn(value, i);
    //   }

    for (let i in arr) {
      fn(arr[i], i);
    }
  },

  mapScratch(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i));
    }
    return result;
  },
};
