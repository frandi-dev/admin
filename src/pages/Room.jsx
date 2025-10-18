import ChardRoom from "../components/ChardRoom";

const Room = () => {
  return (
    <div>
      <div className="row">
        <ChardRoom
          name={"R101"}
          status_room={"terisi"}
          waktu_berjalan={"00:00:00"}
          nama_pelanggan={"mr.G"}
        />
        <ChardRoom
          name={"R102"}
          status_room={"tersedia"}
          waktu_berjalan={"00:00:00"}
        />
        <ChardRoom
          name={"R103"}
          status_room={"tersedia"}
          waktu_berjalan={"00:00:00"}
        />
        <ChardRoom
          name={"R205"}
          status_room={"tersedia"}
          waktu_berjalan={"00:00:00"}
        />
        <ChardRoom
          name={"R206"}
          status_room={"tersedia"}
          waktu_berjalan={"00:00:00"}
        />
        <ChardRoom
          name={"R207"}
          status_room={"tersedia"}
          waktu_berjalan={"00:00:00"}
        />
      </div>

      <div className="row">
        <ChardRoom
          name={"R208"}
          status_room={"tersedia"}
          waktu_berjalan={"00:00:00"}
        />
        <ChardRoom
          name={"R209"}
          status_room={"tersedia"}
          waktu_berjalan={"00:00:00"}
        />
        <ChardRoom
          name={"R210"}
          status_room={"tersedia"}
          waktu_berjalan={"00:00:00"}
        />
        <ChardRoom
          name={"R311"}
          status_room={"tersedia"}
          waktu_berjalan={"00:00:00"}
        />
        <ChardRoom
          name={"R312"}
          status_room={"tersedia"}
          waktu_berjalan={"00:00:00"}
        />
        <ChardRoom
          name={"R316"}
          status_room={"tersedia"}
          waktu_berjalan={"00:00:00"}
        />
      </div>
    </div>
  );
};

export default Room;
