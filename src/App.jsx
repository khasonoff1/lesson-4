import { useRef, useState } from "react";
import { v4 } from "uuid";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TransactionsPage from "./pages/TransactionsPage";
import DebtsPage from "./pages/DebtsPage";
import Layouts from "./components/layout/Layouts";
import LoginPage from "./pages/loginPage/LoginPage";
import SinglePage from "./pages/SinglePage";
import { toast } from "react-toastify";

function App() {
    const [debts, setDebts] = useState(
        JSON.parse(localStorage.getItem("debts")) || [
            {
                id: "1",
                name: "Humoyiddin",
                phone: "+998900057200",
                amount: 1000,
                deadline: "2023-08-09",
                type: "borrow",
            },
            {
                id: "2",
                name: "Bohodir",
                phone: "+998965568431",
                amount: 2000,
                deadline: "2023-12-29",
                type: "lend",
            },
            {
                id: "3",
                name: "Aziz",
                phone: "+998998654455",
                amount: 1400,
                deadline: "2023-11-01",
                type: "borrow",
            },
        ]
    );
    const [debt, setDebt] = useState({
        name: "",
        phone: "",
        amount: "",
        deadline: "",
        type: "",
    });
    const [selected, setSelected] = useState(null);
    const [search, setSearch] = useState("");
    const [modalShow, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    let nameRef = useRef();

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setDebt({
            name: "",
            phone: "",
            amount: "",
            deadline: "",
            type: "",
        });
        setSelected(null);
        console.log(nameRef.current);
    };
    const handleDebt = (e) => {
        setDebt({ ...debt, [e.target.id]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        if (form.checkValidity()) {
            let newDebts;
            let newDebt = { ...debt, amount: +debt.amount, id: v4() };
            if (selected === null) {
                newDebts = [...debts, newDebt];
                toast.success("Added Successfully !", { autoClose: 2000 });
            } else {
                newDebts = debts.map((debt) => {
                    if (debt.id === selected) {
                        return newDebt;
                    } else {
                        return debt;
                    }
                });

                toast.info("Edited Successfully !", { autoClose: 2000 });
            }
            localStorage.setItem("debts", JSON.stringify(newDebts));
            setDebts(newDebts);
            handleClose();
        } else {
            setValidated(true);
        }
    };
    const editDebt = (id) => {
        let debt = debts.find((debt) => debt.id === id);
        setDebt(debt);
        setSelected(id);
        setShow(true);
    };
    const deleteDebt = (id) => {
        let checkDelete = window.confirm("Do you want to delete this debt ?");
        if (checkDelete) {
            const newDebts = debts.filter((debt) => debt.id !== id);
            setDebts(newDebts);
            localStorage.setItem("debts", JSON.stringify(newDebts));
        }
        toast.success("Deleted Successfully !", { autoClose: 2000 });
    };
    const handleSearch = (e) => {
        setSearch(e.target.value.trim().toLowerCase());
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="login" element={<LoginPage />} />
                <Route element={<Layouts />}>
                    <Route path="home" element={<HomePage />} />
                    <Route path="transactions" element={<TransactionsPage debts={debts} />} />
                    <Route path="debts" element={<DebtsPage handleShow={handleShow} handleClose={handleClose} handleSubmit={handleSubmit} handleDebt={handleDebt} editDebt={editDebt} deleteDebt={deleteDebt} handleSearch={handleSearch} nameRef={nameRef} search={search} validated={validated} selected={selected} debt={debt} debts={debts} modalShow={modalShow} />} />
                    <Route path="debts/:debtId" element={<SinglePage debts={debts} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
