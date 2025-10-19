import { useEffect, useState } from "react";
import ChardRoom from "../components/ChardRoom";
import api from "../libs/api";
import AddNewRoom from "../components/AddNewRoom";
import rondom from "../libs/rondomStr";
import { useNavigate } from "react-router-dom";

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [idOrder, setIdOrder] = useState(null);
  const navigate = useNavigate();

  // fetch order untuk status room
  useEffect(() => {
    const fetchPemesanan = async () => {
      try {
        const res = await api.send("/pemesanan", "GET");
        setOrders(res.result);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPemesanan();
  }, []);

  // fetch all rooms
  useEffect(() => {
    const fetchRooms = async () => {
      setLoading(true);
      try {
        const res = await api.send("/rooms", "GET");
        setRooms(res.result);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  useEffect(() => {
    if (idOrder !== null) {
      navigate(`/admin/rooms/preview/${idOrder}`);
    } else {
      console.log("ooo");
    }
  });

  // 💡 gabungkan ruangan dengan order-nya
  const roomsWithOrders = rooms.map((room) => {
    const currentOrder = orders.find(
      (order) => order.id_ruangan === room.id && order.status === "aktif"
    );
    return {
      ...room,
      nama_pelanggan: currentOrder ? currentOrder.nama : null,
      id_pemesanan: currentOrder ? currentOrder.id : null,
    };
  });

  return !loading ? (
    <div>
      <AddNewRoom />
      <div className="row">
        {roomsWithOrders.map((room) => (
          <ChardRoom
            key={rondom.generate(10)}
            name={room.nama}
            status_room={room.status}
            nama_pelanggan={room.nama_pelanggan}
            setIdPreview={() => setIdOrder(room.id_pemesanan)}
          />
        ))}
      </div>
    </div>
  ) : (
    "Loading"
  );
};

export default Room;
