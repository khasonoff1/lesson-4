import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

const DebtCard = ({
  id,
  name,
  phone,
  deadline,
  amount,
  editDebt,
  deleteDebt,
}) => {
  return (
    <Alert className="w-100 d-flex align-items-center justify-content-between">
      <div>
        <span>{name}</span>
        <br />
        <span>${amount}</span>
        <br />
        <span>{deadline}</span>
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary me-3" onClick={() => editDebt(id)}>
          Edit
        </button>
        <button className="btn btn-danger me-3" onClick={() => deleteDebt(id)}>
          Delete
        </button>
        <Link to={`/debts/${id}`} className="btn btn-warning">
          More
        </Link>
      </div>
    </Alert>
  );
};

DebtCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  deadline: PropTypes.string,
  amount: PropTypes.number,
};

export default DebtCard;
