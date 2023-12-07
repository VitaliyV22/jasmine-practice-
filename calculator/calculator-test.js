it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 5000,
    years: 10,
    rate: 2.3
  };
  expect(calculateMonthlyPayment(values)).toEqual('46.68');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 5000,
    years: 10,
    rate: 2.3
  };
  expect(calculateMonthlyPayment(values)).toEqual('46.68');
});


