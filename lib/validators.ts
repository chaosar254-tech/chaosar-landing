export function isValidTRPhone(phone: string): boolean {
  const cleaned = phone.replace(/\s|-/g, "");
  return /^(\+90|0)?5\d{9}$/.test(cleaned);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
