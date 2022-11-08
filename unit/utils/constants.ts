export const SPECIAL_SYMBOLS: string[] = [
  '(',
  ')',
  '/',
  ',',
  '!',
  ':',
  '<',
  '>',
  '[',
  ']',
  '$',
];
export const EMAIL_SEPARATOR: string = '@';
export const MIN_LOGIN_LENGTH: number = 1;
export const MIN_PASSWORD_LENGTH: number = 8;
export const MAX_PASSWORD_LENGTH: number = 20;
export const EMAIL_DOT: string = '.';

export const VALUES_POSITIVE = {
  LOGIN: 'RDarya111',
  PASSWORD: 'DaryaR12345',
  EMAIL: 'example@gmail.com',
};

export const EXPECTED_VALUES_POSITIVE = {
  LOGIN: 'RDarya111',
  PASSWORD: 'DaryaR12345',
};

export const VALUES_NEGATIVE = {
  LOGIN: 'R[Dary5',
  PASSWORD: '1234/5678',
  email: 'examplegmail.com',
};

export const EXPECTED_VALUES_NEGATIVE = {
  LOGIN: 'R{Dary5',
  PASSWORD: '12345678',
};
