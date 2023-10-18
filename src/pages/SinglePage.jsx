import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SinglePage = ({ debts }) => {
  const { debtId } = useParams();

  const { name, phone, deadline, amount, type } = debts.find(
    (debt) => debt.id === debtId
  );
  const type1 = type.charAt(0).toUpperCase() + type.slice(1);
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "85vh" }}
    >
      <Alert className="w-50" style={{ fontSize: "40px" }}>
        <div className="d-flex justify-content-between">
          <span>{name}</span>
          <span>{phone}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span
            className={`${type1 === "Lend" ? "text-danger" : "text-primary"}`}
          >
            {type1}
          </span>
          <span className="text-dark">${amount}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-success">Deadline</span>
          <span>{deadline}</span>
        </div>
      </Alert>
    </div>
  );
};

export default SinglePage;
