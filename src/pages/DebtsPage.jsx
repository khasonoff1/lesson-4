import React from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import DebtCard from "../components/card/DebtCard";

const DebtsPage = ({
  debts,
  handleClose,
  handleShow,
  modalShow,
  validated,
  handleSubmit,
  debt,
  handleDebt,
  editDebt,
  deleteDebt,
  selected,
  search,
  handleSearch,
  nameRef,
}) => {
  const resultDebts = debts.filter((debt) =>
    debt.name.toLowerCase().includes(search)
  );
  return (
    <section className="pt-5">
      <Container>
        <div className="input-group mb-5">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            className="form-control"
            placeholder="Search..."
          />
          <button className="btn btn-primary" onClick={handleShow}>
            Add debt
          </button>
        </div>

        <Modal show={modalShow} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Debt</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  ref={nameRef}
                  value={debt.name}
                  onChange={handleDebt}
                  required
                  type="text"
                  placeholder="Name"
                />
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  required
                  value={debt.phone}
                  onChange={handleDebt}
                  type="text"
                  placeholder="Phone"
                />
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  required
                  value={debt.amount}
                  onChange={handleDebt}
                  type="number"
                  placeholder="Amount"
                />
                <Form.Control.Feedback type="invalid">
                  Please fill this field !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="deadline">
                <Form.Label>Deadline</Form.Label>
                <Form.Control
                  required
                  value={debt.deadline}
                  type="date"
                  onChange={handleDebt}
                  placeholder="Deadline"
                />
                <Form.Control.Feedback type="invalid">
                  Please choose deadline !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="type">
                <Form.Label>Select type</Form.Label>
                <Form.Select value={debt.type} onChange={handleDebt} required>
                  <option></option>
                  <option value="lend">Lend</option>
                  <option value="borrow">Borrow</option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  Please select type !
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-2">
                {selected === null ? "Add" : "Save"} debt
              </Button>
              <Button
                variant="secondary"
                className="w-100"
                onClick={handleClose}
              >
                Close
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <div className="d-flex justify-content-between gap-5">
          <div className="w-50">
            <h2 className="text-center text-danger">Lend</h2>
            {resultDebts
              .filter((sortDebt) => sortDebt.type === "lend")
              .map((debt) => (
                <DebtCard
                  key={debt.id}
                  editDebt={editDebt}
                  deleteDebt={deleteDebt}
                  selected={selected}
                  {...debt}
                />
              ))}
          </div>
          <div className="w-50 ">
            <h2 className="text-center text-success">Borrow</h2>
            {resultDebts
              .filter((fDebt) => fDebt.type === "borrow")
              .map((debt) => (
                <DebtCard
                  key={debt.id}
                  editDebt={editDebt}
                  deleteDebt={deleteDebt}
                  selected={selected}
                  {...debt}
                />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DebtsPage;
