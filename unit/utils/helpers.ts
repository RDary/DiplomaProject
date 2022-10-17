import { ALPHABETIC, SPECIAL_SYMBOL, EMAIL_EXAMPLE } from './constants';
import { EMAIL_DOG, SPACE_INPUT } from './expectedValues';

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getLogin(): string {
  return getRandomString(getRandomInt(1, 14));
}

export function getEmail(): string {
  let emailSplit: any = EMAIL_EXAMPLE.split(EMAIL_DOG);
  return emailSplit[0] + getRandomInt(10000, 99999) + EMAIL_DOG + emailSplit[1];
}

export function generateRandomStringLowerCase(): string {
  return ALPHABETIC[Math.floor(Math.random() * ALPHABETIC.length)];
}

export function generateRandomStringUpperCase(): string {
  return ALPHABETIC.toUpperCase()[
    Math.floor(Math.random() * ALPHABETIC.length)
  ];
}

export function getRandomString(length: number): string {
  let stringResult: string = SPACE_INPUT;
  let characters: string = ALPHABETIC + ALPHABETIC.toUpperCase();
  let charactersLength: number = characters.length;
  for (let i = 0; i < length; i++) {
    stringResult += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }
  return stringResult;
}

export function getPassword(): string {
  let min: number = 0;
  let max: number = 9;
  let rand: number = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    generateRandomStringLowerCase() +
    rand +
    generateRandomStringUpperCase() +
    SPECIAL_SYMBOL
  );
}
