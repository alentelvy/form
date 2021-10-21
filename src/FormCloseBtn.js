import { useHistory } from "react-router-dom";

const FormCloseBtn = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/notpaid");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      class="btn-close align-self-end"
      aria-label="Close"
    ></button>
  );
};

export default FormCloseBtn;
