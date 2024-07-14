const OrderConfirmationModal = () => {
  return (
    <dialog open className="fixed bottom-0 z-20 w-full ::backdrop-[bg-black]">
      <p>Greetings, one and all!</p>
      <form method="dialog">
        <button>OK</button>
      </form>
    </dialog>
  );
};

export default OrderConfirmationModal;
