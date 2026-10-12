const liveCardPatterns = {
  visa: /^4/,
  mastercard: /^(5[1-5]|2(2[2-9]|[3-6][0-9]|7[01]|720))/,
  amex: /^3[47]/,
  discover: /^6(?:011|5)/,
};

export function detectCardTypeLive(input) {
  const clean = input.replace(/[\s-]/g, '');
  for (const [type, regex] of Object.entries(liveCardPatterns)) {
    if (regex.test(clean)) return type;
  }
  return null; 
}