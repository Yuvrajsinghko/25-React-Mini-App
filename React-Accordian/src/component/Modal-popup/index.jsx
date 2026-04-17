import "./style.css"

const ModalPop = ({ id, header, body, footer,onClose }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose}  className="close-modal-icon text-3xl border-2 w-3 h-3 p-0.5 rounded-full">&times;</span>
          <h2>{header ? header : "header"}</h2>
        </div>
        <div className="body">
          <h2>
            {body ? (
              body
            ) : (
              <div>
                <p>This is our Modal Body</p>
              </div>
            )}
          </h2>
        </div>
        <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
};

export default ModalPop;
