import React from "react";
import FormCloseBtn from "./FormCloseBtn";
import FormPayBtn from "./FormPayBtn";
import "./css/PaymentForm.css";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";


const PaymentForm = () => {

  //const [color, setColor] = useState("#f5f5f5");
  const location = useLocation();

  useEffect(() => {
    if(location.pathname == '/pay'){
      document.body.className = 'newColor';
      return () => { document.body.className = ''; }
    }
  }, [location])



  return (
    <div className="container py-5 ">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 ">
          <div className="card p-5">
            <FormCloseBtn />

            <div className="card-header bg-transparent border-0 py-4">
              <h1> Paiement sécurisé par prélèvement bancaire</h1>
            </div>

            <div className="card-header text-center border-0 py-1 my-4 rounded">
              Mise en place d'un mandat SEPA MANGOPAY
            </div>

            <div className="tab-content ">
              <div id="payment" className="tab-pane fade show active pt-3">
                <form role="form">
                  
                  <div className="form-group mb-3">
                    <label htmlFor="titulaire">
                      <h6>
                        Titulaire du compte <span className="asterix"> *</span>{" "}
                      </h6>
                    </label>
                    <input
                      type="text"
                      name="titulaire"
                      required
                      className="form-control "
                      value="Soan solutions"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="adresse">
                      <h6>
                        Adresse du titulaire <span className="asterix"> *</span>
                      </h6>
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="adresse"
                        placeholder="Adresse du titulaire"
                        className="form-control "
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="ville">
                          Ville <span className="asterix"> *</span>
                        </label>
                        <input
                          type="text"
                          id="ville"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="region">
                          Région <span className="asterix"> *</span>
                        </label>
                        <input
                          type="text"
                          id="region"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="code">
                          Code postal <span className="asterix"> *</span>
                        </label>
                        <input
                          type="text"
                          id="code"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="pays">
                          Pays <span className="asterix"> *</span>
                        </label>
                        <input
                          type="text"
                          id="pays"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="iban">
                      <h6>
                        Iban <span className="asterix"> *</span>
                      </h6>
                    </label>
                    <input
                      type="text"
                      name="iban"
                      placeholder={"_ _ _ _  ".repeat(4)}
                      required
                      pattern="^FR\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{2}|FR\d{20}$"
                      className="form-control "
                    />
                  </div>

                  <div className="row justify-content-end ">
                    <div className="col-3">
                      <div className="mt-2">
                        <strong>Annuler </strong>
                      </div>
                    </div>

                    <div className="col-4">
                      <FormPayBtn />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
