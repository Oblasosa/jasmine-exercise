
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 100000,
    years: 10,
    rate: 12.6,
  };
  expect(calculateMonthlyPayment(values)).toEqual(1469.61)
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc

it("should accept % inputs", function() {

})