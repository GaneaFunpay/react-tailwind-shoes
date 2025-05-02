function Sidebar({ children, isOpen, onClickClose }) {
  return (
    <>
      <div
        className={`overflow-y-auto z-50 w-full md:w-[50%] lg:w-[40%] xl:w-[35%] h-full fixed top-0 p-8 right-0 bg-white transition transform duration-300 dark:bg-night
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClickClose}
          className="fixed top-4 right-4 ms-auto p-4 text-bold dark:text-white"
        >
          X
        </button>

        {children}
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-20 bg-black opacity-60"></div>
      )}
    </>
  );
}

export default Sidebar;
