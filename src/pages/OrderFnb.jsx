import { Fragment, useEffect, useRef, useState } from "react";
import message from "../libs/message";
import api from "../libs/api";
import { AiOutlineShoppingCart } from "react-icons/ai";
import rondom from "../libs/rondomStr";

const OrderFnb = () => {
  const [fnb, setFnb] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartQty, setCartQty] = useState(0);
  const [cartEdit, setCartEdit] = useState({});

  useEffect(() => {
    const fetchFnb = async () => {
      setLoading(true);
      try {
        const res = await api.send("/fnb", "GET");

        setFnb(res.result);
      } catch (error) {
        console.log(error.message);

        message.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFnb();
  }, []);

  const handleAddToCart = (e, v) => {
    e.preventDefault();
    setCart((prev) => {
      // cek apakah barang sudah ada di keranjang
      const exist = prev.find((item) => item.id === v.id);

      if (exist) {
        // update quantity
        return prev.map((item) =>
          item.id === v.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // tambahkan barang baru
        return [...prev, { ...v, qty: 1 }];
      }
    });
  };

  const handleSaveQty = (e) => {
    e.preventDefault();
    const newData = {
      ...cartEdit,
      qty: cartQty,
    };

    setCart((prev) => {
      // cek apakah barang sudah ada di keranjang
      const exist = prev.find((item) => item.id === newData.id);
      if (exist) {
        return prev.map((item) =>
          item.id === newData.id ? { ...item, qty: newData.qty } : item
        );
      } else {
        return prev;
      }
    });

    if (Number(cartQty) === 0) {
      setCart((prev) => {
        // buat salinan array agar tidak mutasi state langsung
        const newCart = [...prev];

        // cari index item pertama yang cocok dengan id
        const index = newCart.findIndex((item) => item.id === cartEdit.id);

        // kalau ketemu, hapus hanya 1 item di posisi itu
        if (index !== -1) {
          newCart.splice(index, 1);
        }

        // kembalikan array baru sebagai state baru
        return newCart;
      });
    }
  };

  return !loading ? (
    <div className="row">
      <div className="col-8" style={{ height: "70vh", overflowY: "scroll" }}>
        <div className="row">
          <div className="navbar">
            <div className="container-fluid">
              <a class="navbar-brand"></a>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          {fnb.map((value, i) => (
            <div className="card" key={i}>
              <div className="card-header bg-body">
                <h4 className="card-title text-primary-emphasis pt-2">
                  {value.nama.toUpperCase()}
                </h4>
              </div>
              <ul className="list-group list-group-flush">
                {value.menu_fnb.map((v) => (
                  <Fragment key={v.nama}>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">{v.nama}</div>
                        <div className="col-1">
                          <button
                            className="btn btn btn-outline-primary text-center"
                            onClick={(e) => handleAddToCart(e, v)}
                          >
                            <AiOutlineShoppingCart
                              style={{ marginBottom: "2px" }}
                            />
                          </button>
                        </div>
                      </div>
                    </li>
                  </Fragment>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* kranjang */}
      <div className="col">
        <div
          className="modal fade"
          id="editCartModal"
          aria-labelledby="editCartModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="editCartModalLabel">
                  Edit Quantity
                </h1>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <input
                    type="number"
                    min={0}
                    className="form-control"
                    onChange={(e) => setCartQty(e.target.value)}
                    value={cartQty}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveQty}
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <ol className="list-group list-group-numbered">
          {cart.length === 0
            ? "Kosong"
            : cart.map((c) => (
                <li
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#editCartModal"
                  className="list-group-item d-flex justify-content-between align-items-start list-group-item-action"
                  style={{ cursor: "pointer" }}
                  key={rondom.generate(10)}
                  onClick={() => {
                    setCartQty(c.qty);
                    setCartEdit(c);
                  }}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{c.nama}</div>
                  </div>
                  <span className="badge text-bg-primary rounded-pill">
                    {c.qty}
                  </span>
                </li>
              ))}
        </ol>
      </div>
    </div>
  ) : (
    <div>
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status">Loading...</span>
    </div>
  );
};

export default OrderFnb;
