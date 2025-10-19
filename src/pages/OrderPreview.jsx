import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../libs/api";
import message from "../libs/message";
import formatRupiah from "../libs/format.idr";
import { useNavigate } from "react-router-dom";

const OrderPriview = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  // fetch data preview
  useState(() => {
    const fetchPriview = async () => {
      setLoading(true);
      try {
        const res = await api.send(`/pemesanan/preview/${id}`, "GET");
        setDetails(res.result);
      } catch (error) {
        console.log(error.message);
        message.error(error.message);
      } finally {
        setLoading(true);
      }
    };

    fetchPriview();
  }, []);

  const handleFnb = (e) => {
    e.preventDefault();
    navigate(`/admin/order/fnb/${id}`);
  };

  return (
    <>
      <div className="card">
        <h5 className="card-header">
          {details.nama_ruangan} - {details.nama_pelanggan}
        </h5>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Waktu sewa : {details.durasi_dipesan_menit / 60} Jam
            </li>
            <li className="list-group-item">
              Sisa waktu : {details.sisa_waktu_jam} Jam
            </li>
            <li className="list-group-item">
              Total F&B : {formatRupiah(details.total_fnb)}
              <button
                className="badge text-bg-primary"
                style={{ border: "none", marginLeft: "1rem" }}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Preview detail pemesanan F&B"
              >
                Preview
              </button>
            </li>
            <li className="list-group-item">
              Total Sewa : {formatRupiah(details.total_sewa)}
            </li>
            <li className="list-group-item">
              Total_tagihan: {formatRupiah(details.total_tagihan)}
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-row mb-3">
        <div className="p-2">
          <button className="btn btn-primary" onClick={handleFnb}>
            F&B
          </button>
        </div>
        <div className="p-2">
          <button className="btn btn-danger">Ceckout</button>
        </div>
      </div>
    </>
  );
};

export default OrderPriview;
