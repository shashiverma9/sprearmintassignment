import { useSelector } from 'react-redux';

const useFormValidation = (rules) => {
  const fieldValues = useSelector(state => state.fieldValues);
  const errors = {};

  Object.keys(rules).forEach(fieldName => {
    if (rules[fieldName].required && !fieldValues[fieldName]) {
      errors[fieldName] = 'This field is required';
    }
    // Add more validation rules here
  });

  return errors;
};

export default useFormValidation;