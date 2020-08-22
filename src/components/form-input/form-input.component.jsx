import React from 'react';

import { FormInputContainer, FormInputElem, FormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...props }) => (
  <FormInputContainer>
    <FormInputElem onChange={ handleChange } { ...props }/>
    {
      label ? (
        <FormInputLabel {...props}>
          {label}
        </FormInputLabel>)
        : null
    }
  </FormInputContainer>
);

export default FormInput;