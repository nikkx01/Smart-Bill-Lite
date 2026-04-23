import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Dashboard() {
  const navigate = useNavigate();

  const [bills, setBills] = useState([]);
  const [customer, setCustomer] = useState("");
  const [amount, setAmount] = useState("");

  const token = localStorage.getItem("token");

  const fetchBills = async () => {
    const res = await API.get("/bills", {
      headers: { Authorization: token }
    });
    setBills(res.data);
  };

  const addBill = async () => {
    await API.post("/bills", { customer, amount }, {
      headers: { Authorization: token }
    });
    fetchBills();
  };

  const deleteBill = async (id) => {
    await API.delete(`/bills/${id}`, {
      headers: { Authorization: token }
    });
    fetchBills();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      fetchBills();
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 SmartBill Dashboard</h2>

      <button onClick={logout}>Logout</button>

      <div style={{ marginBottom: "20px" }}>
        <input placeholder="Customer" onChange={e => setCustomer(e.target.value)} />
        <input placeholder="Amount" onChange={e => setAmount(e.target.value)} />
        <button onClick={addBill}>Add Bill</button>
      </div>

      <h3>Your Bills</h3>

      {bills.map(b => (
        <div key={b._id} style={{
          border: "1px solid #ccc",
          padding: "10px",
          margin: "10px 0",
          borderRadius: "5px"
        }}>
          {b.customer} - ₹{b.amount}
          <button onClick={() => deleteBill(b._id)} style={{ marginLeft: "10px" }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}