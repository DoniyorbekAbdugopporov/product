import React from "react";

const Modal = ({ imgUrl, setOpen }) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-[#000A] flex items-center justify-center z-10 ">
      <div className="bg-white pt-16 px-8 pb-8 rounded-lg max-w-[500px] relative dark:bg-slate-300">
        <span
          onClick={() => setOpen(false)}
          className="absolute top-4 right-6 text-xl cursor-pointer"
        >
          X
        </span>
        <img className="w-full" src={imgUrl} alt="modal img" />
      </div>
    </div>
  );
};

export default Modal;
