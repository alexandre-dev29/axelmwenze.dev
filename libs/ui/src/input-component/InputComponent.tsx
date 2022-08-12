import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { HTMLInputTypeAttribute } from 'react';

export function InputComponent({
  inputType,
  register,
  errorField,
  errorMsg,
  placeHolder,
}: {
  register: UseFormRegisterReturn<string>;
  errorField: FieldError;
  inputType: HTMLInputTypeAttribute;
  errorMsg: string;
  placeHolder: string;
}) {
  return (
    <div className="app__flex">
      <input
        className="p-text default-police"
        type={inputType}
        placeholder={placeHolder}
        {...register}
      />
      {errorField && (
        <span className={'text-red-500 text-sm default-police  w-48'}>
          {errorMsg}
        </span>
      )}
    </div>
  );
}

export default InputComponent;
