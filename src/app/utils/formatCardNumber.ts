export const formatCardNumber = (cardNumber: string) => {
  const format = '#### - #### - #### - ####';

  if (cardNumber) {
    // @ts-ignore
    return cardNumber
      .toString()
      .replace(/\s+/g, '')
      .replace(/[^0-9]/gi, '')
      .padEnd(16, '#')
      .match(/.{1,4}/g)
      .join(' - ');
  }
  return cardNumber;
};
