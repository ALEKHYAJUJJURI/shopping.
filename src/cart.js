import 'bootstrap/dist/css/bootstrap.css';

export function CartItems(){
    return(
        <div>
           <button
              type="button"
              className="contact-btn"
              data-bs-toggle="modal"
              data-bs-target=""
            >
              CONTACT US
            </button>
            <div
              className="modal fade"
              id=""
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1>Talk to us</h1>
                  </div>
                  <div className="modal-body">
                    <dl>
                      <dd>
                        <input
                          type="email"
                          name=""
                          id="email-input"
                          autocomplete="off"
                          required
                          className="input-field form-control"
                          placeholder="Work email*"
                        />
                      </dd>
                      <div className="d-flex">
                        <dd>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name*"
                          />
                        </dd>
                        <dd>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last name*"
                          />
                        </dd>
                      </div>
                      <div className="d-flex">
                        <input className="input" type="checkbox" />
                        <label>
                          I agree to Fyle's terms and conditions, and provide
                          consent to send me communication.
                        </label>
                      </div>
                      
                    </dl>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-danger" data-bs-dismiss="modal">Contact Is</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}