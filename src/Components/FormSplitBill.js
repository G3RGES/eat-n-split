import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? bill - paidByUser : "";

  const handlePaidByUser = (e) => {
    setPaidByUser(Number(e.target.value > bill ? paidByUser : e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    console.log(bill, paidByUser, whoIsPaying);

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🙍‍♂️Your expense</label>
      <input type="text" value={paidByUser} onChange={handlePaidByUser} />

      <label>🧑‍🦱{selectedFriend.name} expense</label>
      <input type="text" disabled value={Number(paidByFriend)} />

      <label>💵Who's paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
