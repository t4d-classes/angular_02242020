import { AbstractControl } from '@angular/forms';

export const minAgeValidator = (minAge: number) => (c: AbstractControl) => {

  if (c.value === null || c.value === undefined || String(c.value).length === 0) {
    return null;
  }

  if (Number(c.value) < minAge) {
    // return an object when validation fails
    return { minAge: true };
  }

  return null;

};