  const cardPatterns = {
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  mastercard: /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{12}|[3-6][0-9]{13}|7[01][0-9]{12}|720[0-9]{12}))$/,
  amex: /^3[47][0-9]{13}$/,
  discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
};

export function getCardType(cardNumber) {
  for (const [cardType, pattern] of Object.entries(cardPatterns)) {
    if (pattern.test(cardNumber.replace(/\s/g, ''))) {
      return cardType;
    }
  }
  return null;
}

