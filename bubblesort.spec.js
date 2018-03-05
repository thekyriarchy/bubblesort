describe("Bubble Sort", function() {
  beforeAll(function() {
    spyOn(window, "swap").and.callThrough(); // replace existing `swap`
  });
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("handles a sorted array of integers", function() {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  it("handles a unsorted array of integers", function() {
    expect(bubbleSort([2, 1, 3, 5, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(swap).toHaveBeenCalledTimes(2);
  });
  it("handles a decimal numbers", function() {
    expect(bubbleSort([2.5, 1.3, 3.1, 5.6, 4.1])).toEqual([
      1.3,
      2.5,
      3.1,
      4.1,
      5.6
    ]);
  });
});
