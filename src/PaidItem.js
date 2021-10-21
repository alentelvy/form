import React from "react";
import useFetch from "./useFetch";

const PaidItem = () => {
  const { data, loading, error } = useFetch(
    "https://test.soan-solutions.io/test_front/datas"
  );
  if (loading) {
    return <h1> LOADING...</h1>;
  }

  if (error) {
    console.log(error);
  }

  const getDiscount = (amount, percent) => {
    return amount - (amount * percent) / 100;
  };

  return (
    <div>
      {data &&
        data.payments.map((element) => {
          if (element.payedDate != null) {
            return (
              <tr className="col-12 d-flex justify-content-center">
                <td className="col-4 ms-5">
                  {element.invoiceNumber}
                  <p id="paybefore"> Réglé le {element.sentDate} </p>
                </td>

                <td className="col-4 ms-3">
                  &#9889; Escompte
                  {element.discount && (
                    <p id="payindays" className="ms-4">
                      Appliqué
                    </p>
                  )}
                </td>

                <td className="col-4 ms-3">
                  {element.discount ? (
                    <span className="ms-4">
                      {getDiscount(
                        parseInt(element.amount),
                        parseInt(element.discount.rate)
                      )}
                      €
                      <p id="discounted" className="ms-4">
                        {element.amount} €
                      </p>
                    </span>
                  ) : (
                    <span className="ms-4">{element.amount} € </span>
                  )}
                </td>
              </tr>
            );
          }
        })}
    </div>
  );
};

export default PaidItem;
