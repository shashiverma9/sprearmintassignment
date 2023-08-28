// Action types
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const TOGGLE_FIELD_VISIBILITY = 'TOGGLE_FIELD_VISIBILITY';

// Action creators
export const updateField = (fieldName, value) => ({
  type: UPDATE_FIELD,
  payload: { fieldName, value },
});

export const toggleFieldVisibility = (fieldName, isVisible) => ({
  type: TOGGLE_FIELD_VISIBILITY,
  payload: { fieldName, isVisible },
});