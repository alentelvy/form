import { useHistory } from "react-router-dom";

const FormPayBtn = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/paid");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="btn col-12 text-white"
    >
      {" "}
      Payer{" "}
    </button>
  );
};

export default FormPayBtn;
