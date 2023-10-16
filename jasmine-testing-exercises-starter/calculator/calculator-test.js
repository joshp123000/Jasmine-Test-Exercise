
it('should calculate the monthly rate correctly with 2 decimal places', function () {
  const values = {amount: 1000, rate: 5, years: 1}
  expect(calculateMonthlyPayment(values)).toEqual(85.61)
});



