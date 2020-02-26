import { AbstractControl, ValidatorFn } from "@angular/forms";


export function forbiddenNameValidator(frobiddenName:RegExp): ValidatorFn{
  return  (control: AbstractControl):{[key:string]:any} | null => {
        const frobidden= frobiddenName.test(control.value);
        return frobidden? {'frobiddenName':{value:control.value}}:null;
        }
}