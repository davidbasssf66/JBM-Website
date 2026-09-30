export default function VideoModal({ isOpen, label, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay open"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal-box" role="dialog" aria-modal="true" aria-label={label}>
        <button className="modal-close" onClick={onClose} aria-label="Close video">
          &times;
        </button>
        <span>{label}</span>
      </div>
    </div>
  );
}
