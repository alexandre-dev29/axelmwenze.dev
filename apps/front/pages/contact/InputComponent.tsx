import {
  FieldError,
  FieldErrors,
  UseFormRegisterReturn,
} from 'react-hook-form';

import { HTMLInputTypeAttribute } from 'react';

export default function InputComponent({
  inputType,
  register,
  errorField,
  errorMsg,
  placeHolder,
  inputName,
}: {
  register: UseFormRegisterReturn<string>;
  errorField: FieldError;
  inputType: HTMLInputTypeAttribute;
  errorMsg: string;
  placeHolder: string;
  inputName: string;
}) {
  return (
    <div className="app__flex">
      <input
        className="p-text"
        type={inputType}
        placeholder={placeHolder}
        name={inputName}
        {...register}
      />
      {errorField && (
        <span className={'text-red-500 text-sm  w-48'}>{errorMsg}</span>
      )}
    </div>
  );
}
