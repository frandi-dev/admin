const ModalForm = ({ target, title, loading, onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      <div
        className="modal fade"
        id={target}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby={`${target}label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`${target}label`}>
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                {loading ? "Loading..." : "Ok"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ModalForm;
