namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length > 3 ? true : false;
  };

  export const validateDate = (myDate: number): boolean => {
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

console.log(Validations.validateText("Tomas"));
console.log(Validations.validateDate(112312312));
