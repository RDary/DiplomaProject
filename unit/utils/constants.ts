export const specialSymbols: string[] = [
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
export const emailSeparator: string = '@';
export const minLoginLength: number = 1;
export const minPasswordLength: number = 8;
export const maxPasswordLength: number = 20;
export const emailDot: string = '.';

export const VALUES_POSITIVE = {
  login: 'RDarya111',
  password: 'DaryaR12345',
  email: 'example@gmail.com',
};

export const EXPECTED_VALUES_POSITIVE = {
  login: 'RDarya111',
  password: 'DaryaR12345',
};

export const VALUES_NEGATIVE = {
  login: 'R[Dary5',
  password: '1234/5678',
  email: 'examplegmail.com',
};

export const EXPECTED_VALUES_NEGATIVE = {
  login: 'R{Dary5',
  password: '12345678',
};
