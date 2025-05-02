import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { SIZES, QUANTITY } from "../constants";

function CartItem({ item: { product, qty, size }, onClickTrash }) {
  return (
    <div className="p-2 cursor-pointer bg-gray-50 hover:bg-[#DAFFA2] dark:bg-transparent dark:hover:bg-night-50">
      <div className="flex  space-x-2 ">
        <img className="h-24" src={product.src} />

        <div className="space-y-2">
          <div className="font-bold dark:text-white">{product.title}</div>
          <div className="text-sm text-gray-500">{product.description}</div>
        </div>

        <div className="font-bold dark:text-white">{product.price}$</div>
      </div>

      <div className="flex justify-between">
        <div className="flex space-x-6 ps-32">
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <Select
              title=""
              options={SIZES}
              className={"w-16 p-1 pl-2"}
              value={size}
            />
          </div>

          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <Select
              title=""
              options={QUANTITY}
              className={"w-16 p-1 pl-2"}
              value={qty}
            />
          </div>
        </div>

        <button onClick={() => onClickTrash(product.id)}>
          <CiTrash size={25} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
