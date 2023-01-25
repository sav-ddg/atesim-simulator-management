import "../App.css";

export default function LoginAlertPopup(props) {
  return (
    <div className="alertContainer">
      <h3>{props.message}</h3>
      <button
        onClick={() => {
          props.close();
        }}
      >
        Tamam
      </button>
    </div>
  );
}
