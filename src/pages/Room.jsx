import { useEffect, useState } from "react";
import ChardRoom from "../components/ChardRoom";
import api from "../libs/api";
import AddNewRoom from "../components/AddNewRoom";
import rondom from "../libs/rondomStr";

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return !loading ? (
    <div>
      <AddNewRoom />
      <div className="row">
        {rooms.map((room) => {
          // jika belum terisi
          if (orders.length || room.status !== "terisi") {
            return (
              <ChardRoom
                key={rondom.generate(10)}
                name={room.nama}
                status_room={room.status}
              />
            );
          }
          // jika sudah terisi
          return orders.map((order) => (
            <ChardRoom
              key={rondom.generate(10)}
              name={room.nama}
              status_room={room.status}
              nama_pelanggan={order.nama}
            />
          ));
        })}
      </div>
    </div>
  ) : (
    "Loading"
  );
};

export default Room;
