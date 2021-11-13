import React from "react";

export const MultiRange = () => {
  return (
    <div className="filter__options__multi-range">
      <h2>Multi Range</h2>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          $10
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          $10-$100
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault3">
          $100-$500
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault4"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault4">
          $500
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault5"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="flexRadioDefault5">
          All
        </label>
      </div>
    </div>
  );
};
