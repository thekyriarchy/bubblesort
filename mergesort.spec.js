describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    // your code here
    expect(split([1, 2])).toEqual([[1], [2]]);
    expect(split([1, 3, 5, 7, 9, 13, 17])).toEqual([[1, 3, 5, 7], [9, 13, 17]]);
  });
});
describe("Merge function", function() {
  it("is able to merge two arrays into one", function() {
    // your code here
    expect(merge([2], [1])).toEqual([1, 2]);
    expect(merge([7, 9, 13], [1, 3, 5, 17])).toEqual([1, 3, 5, 7, 9, 13, 17]);
  });
});
describe("Merge sort function", function() {
  // beforeEach(function() {
  //   spyOn(window, "swap").and.callThrough(); // replace existing `swap`
  // });
  it("handles an empty array", function() {
    expect(mergeSort([])).toEqual([]);
  });
  it("handles a sorted array of integers", function() {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  it("handles a unsorted array of integers", function() {
    expect(mergeSort([2, 1, 3, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });
  it("handles a decimal numbers", function() {
    expect(mergeSort([2.5, 1.3, 3.1, 5.6, 4.1])).toEqual([
      1.3,
      2.5,
      3.1,
      4.1,
      5.6
    ]);
  });
});
