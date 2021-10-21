import { useHistory } from "react-router-dom";

const NotPaidBtn = ({ sum }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/pay");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="btn col-4 text-white align-self-end"
    >
      {" "}
      Payer {sum} €{" "}
    </button>
  );
};

export default NotPaidBtn;
