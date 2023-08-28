import { combineReducers } from 'redux';
import { UPDATE_FIELD, TOGGLE_FIELD_VISIBILITY } from '../action/action';

// Reducer for form fields' values
const fieldsValuesReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return { ...state, [action.payload.fieldName]: action.payload.value };
    default:
      return state;
  }
};

// Reducer for form fields' visibility
const fieldsVisibilityReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_FIELD_VISIBILITY:
      return { ...state, [action.payload.fieldName]: action.payload.isVisible };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  fieldValues: fieldsValuesReducer,
  fieldVisibility: fieldsVisibilityReducer,
});

export default rootReducer;
