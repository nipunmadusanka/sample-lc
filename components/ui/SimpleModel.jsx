// components/SimpleModal.jsx
export function SimpleModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4">
      <div className="bg-white rounded shadow-lg max-w-lg w-full relative h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-2 right-2 text-xl font-bold text-black hover:text-gray-600 cursor-pointer"
        >
          ×
        </button>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
