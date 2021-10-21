import React from "react";
import useFetch from "./useFetch";
import { useEffect } from "react";

const NotPaidItem = ({ setSum }) => {
  const { data, loading, error } = useFetch(
    "https://test.soan-solutions.io/test_front/datas"
  );

  useEffect(() => {
    if (data) {
      const sum = data.payments
        .filter((element) => element.payedDate == null)
        .map((element) => parseInt(element.amount))
        .reduce((pv, cv) => pv + cv, 0);
      setSum(sum);
    }
  }, [data]);

  if (loading) {
    return <h1> LOADING...</h1>;
  }

  if (error) {
    return <h1> Error </h1>;
  }

  return (
    <div>
      {data &&
        data.payments.map((element) => {
          if (element.payedDate == null) {
            return (
              <tr className="col-12 d-flex justify-content-between">
                <td className="col-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="flexCheckCheckedDisabled"
                    checked
                  />
                  {element.invoiceNumber}
                  <p id="paybefore" className="ms-4">
                    A régler avant le {element.sentDate}
                  </p>
                </td>

                <td className="col-4 ms-4">
                  &#9889; Escompte
                  {element.discount && (
                    <p id="payindays" className="ms-4">
                      {element.discount.rate}% pendent
                      {element.discount.maxDaysToPay} jours
                    </p>
                  )}
                </td>

                <td className="col-4 ms-4"> {element.amount} € </td>
              </tr>
            );
          }
        })}
    </div>
  );
};

export default NotPaidItem;
