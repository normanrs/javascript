const workDayHours = 8;
const minBillableDays = 22;
const minBillableHours = minBillableDays * workDayHours

export function dayRate(ratePerHour) {
  return workDayHours * ratePerHour
}

export function daysInBudget(budget, ratePerHour) {
  const rawResult = budget/(workDayHours * ratePerHour);
  return Math.trunc(rawResult);
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const rawHours = numDays * workDayHours;
  const discountedRate = ratePerHour * (1 - discount)
  const discountMonths = Math.trunc(rawHours / minBillableHours)
  const discountHours = discountMonths * minBillableDays * workDayHours
  const discountTotal = discountHours * discountedRate
  const remainingTotal = (rawHours - discountHours) * ratePerHour
  return Math.ceil(discountTotal + remainingTotal);
}
