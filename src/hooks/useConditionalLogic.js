import { useSelector } from 'react-redux';

const useConditionalLogic = (fieldName, conditionField, conditionValue) => {
  const fieldValue = useSelector(state => state.fieldValues[fieldName]);
  const conditionFieldValue = useSelector(state => state.fieldValues[conditionField]);
  
  return conditionFieldValue === conditionValue ? fieldValue : '';
};

export default useConditionalLogic;