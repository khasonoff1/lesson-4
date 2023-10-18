import { Alert, Container } from "react-bootstrap";

const TransactionsPage = ({ debts }) => {
    let lendSum = 0;
    let borrowSum = 0;

    debts
        .filter((debt) => debt.type === "lend")
        .map((debt) => {
            return (lendSum += debt.amount);
        });
    debts
        .filter((debt) => debt.type === "borrow")
        .map((debt) => {
            return (borrowSum += debt.amount);
        });

    return (
        <section>
            <Container>
                <div className="d-flex gap-4 pt-4">
                    <Alert className="d-flex w-50 align-items-center justify-content-between" style={{ fontSize: "40px" }}>
                        <span className="text-danger">Lends</span>
                        <span>${lendSum}</span>
                    </Alert>

                    <Alert className="d-flex w-50 align-items-center justify-content-between" style={{ fontSize: "40px" }}>
                        <span className="text-success">Borrows</span>
                        <span>${borrowSum}</span>
                    </Alert>
                </div>
            </Container>
        </section>
    );
};

export default TransactionsPage;
