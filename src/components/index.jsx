import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField, toggleFieldVisibility } from "../redux/action/action";
import useConditionalLogic from "../hooks/useConditionalLogic";
import useFormValidation from "../hooks/useFormValidation";
import "./index.css";

const Form = () => {
  const dispatch = useDispatch();
  const fieldVisibility = useSelector((state) => state.fieldVisibility);

  const handleDropdownChange = (value) => {
    dispatch(toggleFieldVisibility("companyName", value === "Yes"));
    dispatch(updateField("areYouEmployed", value));
  };

  const companyName = useConditionalLogic(
    "companyName",
    "areYouEmployed",
    "Yes"
  );
  const errors = useFormValidation({
    companyName: { required: true },
  });

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1 className="form-heading">Form</h1>
        <div className="drop-down-wrapper">
          <label className="drop-down-label">Are you employed?</label>
          <select
            className="select-wrapper"
            onChange={(e) => handleDropdownChange(e.target.value)}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        {fieldVisibility.companyName && (
          <div>
            <div className="company-wrapper">
              <label className="company-name">Company Name</label>
              <input
                type="text"
                className="input-field"
                value={companyName}
                onChange={(e) =>
                  dispatch(updateField("companyName", e.target.value))
                }
              />
            </div>
            {errors.companyName && (
              <div className="error-msg">{errors.companyName}</div>
            )}
          </div>
        )}
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default Form;
