import React from 'react'
import formElements from '../../img/copy.svg';
import formLayouts from '../../img/sidebar.svg';
import formValidation from '../../img/check-circle.svg';
import formWizard from '../../img/file-text.svg';

export const FormsMenu = () => {
    return (
        <div className="row">
            <h2>FORMS</h2>
            <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#form-elements" aria-expanded="false" aria-controls="form-elements">
                <img src={formElements} alt="form elements icon" />
                <p>Form Elements</p>
            </button>
            <div className="collapse" id="form-elements">
                <input type="radio" className="btn-check" name="btnradio" id="form-elements-input" autoComplete="off" defaultChecked />
                <label className="btn" htmlFor="form-elements-input" />
            </div>

            <div>
                <img src={formLayouts} alt="form layouts icon" />
                <input type="radio" className="btn-check" name="btnradio" id="form-layouts" autoComplete="off" />
                <label className="btn" htmlFor="form-layouts">Form Layouts</label>
            </div>

            <div>
                <img src={formWizard} alt="form wizard icon" />
                <input type="radio" className="btn-check" name="btnradio" id="form-wizard" autoComplete="off" />
                <label className="btn" htmlFor="form-wizard">Form Wizard</label>
            </div>

            <div>
                <img src={formValidation} alt="form validation icon" />
                <i className="fas fa-circle-check" />
                <input type="radio" className="btn-check" name="btnradio" id="form-validation" autoComplete="off" />
                <label className="btn" htmlFor="form-validation">Form Validation</label>
            </div>
        </div>
    )
}
