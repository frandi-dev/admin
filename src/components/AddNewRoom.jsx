import { useState } from "react";
import ModalForm from "./ModalForm";
import api from "../libs/api";
import message from "../libs/message";

const AddNewRoom = () => {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await api.send("/rooms", "POST", {
        nama: name,
        kapasitas: capacity,
        tarif_per_jam: price,
      });
    } catch (error) {
      console.log(error);
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* modal untuk tambah room */}
      <ModalForm
        target={"add-room"}
        title={"create new room"}
        onSubmit={handleSubmit}
        loading={loading}
      >
        <div className="form-group mb-4">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
            className="form-control"
            placeholder="Enter your room name..."
          />
        </div>
        <div className="form-group mb-4">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="tarif_per_jam"
            value={price}
            min={0}
            onChange={(e) => {
              e.preventDefault();
              setPrice(e.target.value);
            }}
            className="form-control"
          />
        </div>

        <div className="form-group mb-4">
          <label className="form-label">Capacity</label>
          <input
            type="number"
            name="kapasitas"
            value={capacity}
            min={0}
            onChange={(e) => {
              e.preventDefault();
              setCapacity(e.target.value);
            }}
            className="form-control"
          />
        </div>
      </ModalForm>
    </>
  );
};

export default AddNewRoom;
