export const isRequiredValidator = (value: any) => {
    if (!value) {
      return "Field is required";
    }
  };
  
  export const isAlphabetical = (value: string) => {
    const regex = /^[A-Za-z]+$/;
  
    if (!regex.test(value)) {
      return "Use only letters";
    }
  };
  
  export const isMobileNumberValidator = (value: string) => {
    const regex = /^[0-9]{10}$/;
    if (!regex.test(value)) {
      return "Not a valid mobile number";
    }
  };
  

  export const isValidAge = (value:string) => {
    const valueNumber = Number(value);
    if(valueNumber< 0 || valueNumber > 100){
        return "Not a valid age";
    }
  }