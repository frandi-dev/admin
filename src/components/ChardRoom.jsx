const ChardRoom = ({ name, status_room, waktu_berjalan, nama_pelanggan }) => {
  return (
    <div className="col-2">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Status: {status_room}
          </h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            name: {nama_pelanggan ? nama_pelanggan : "..."}
          </h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            waktu: {waktu_berjalan}
          </h6>

          <div className="d-grid gap-2">
            {status_room === "terisi" ? (
              <button className="btn btn-danger">Preview</button>
            ) : (
              <button className="btn btn-primary">Standby</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChardRoom;
