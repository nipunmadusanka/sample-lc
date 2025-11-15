'use client';
import Button from "../button";

const ConfirmOption = ({ title, onClose, onConfirm }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4">
            <div className="h-screen w-screen flex justify-center items-center ">
                <div className=" bg-white rounded shadow-lg max-w-lg w-full  ">
                    <div className="flex justify-between items-center p-6 h-[20px] w-full">
                        <p className="!text-lg !font-bold !p-0 !m-0">{title}</p>
                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className="text-xl font-bold text-black hover:text-gray-600 cursor-pointer"
                        >
                            ×
                        </button>
                    </div>
                    <div className="flex justify-center items-center gap-10 px-10 py-5 mt-5">
                        <Button onClick={onConfirm} className="w-full hover:text-black">Confirm</Button>
                        <Button onClick={onClose} className="w-full hover:text-black">Cancel</Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ConfirmOption;