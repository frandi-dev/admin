import { useEffect, useState } from "react";
import ChardRoom from "../components/ChardRoom";
import api from "../libs/api";

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

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
      <div className="row">
        {rooms.map((room) => (
          <ChardRoom key={room.id} name={room.nama} status_room={room.status} />
        ))}
      </div>
    </div>
  ) : (
    "Loading"
  );
};

export default Room;
