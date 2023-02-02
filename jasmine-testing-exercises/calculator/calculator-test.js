
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 100000,
    years: 10,
    rate: 12.6,
  };
  expect(calculateMonthlyPayment(values)).toEqual('1469.61')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 12345,
    years: 6,
    rate: 3.51
  };
  expect(calculateMonthlyPayment(values)).toEqual('190.40')
});

/// etc

it("should accept negative rates", function() {
  const values = {
    amount: 1000,
    years: 10,
    rate: -10.12
  }
})