import { useState } from "react";
import Nike1 from "../assets/n1-min.png";
import { QUANTITY, SIZES } from "../constants";
import Select from "./Select";

function ShoeDetail({ shoe, onClickAdd }) {
  const [form, setForm] = useState({ qty: null, size: null });

  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      <div className="flex-1 lg:ml-28 lg:-mt-32">
        <div className=" flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img src={shoe.src} alt="" className="animate-float" />
        </div>
      </div>

      <div className="flex-1 space-y-6 dark:text-white">
        <div className="text-5xl font-black md:text-9xl">{shoe.title}</div>

        <div className="font-medium md:text-xl">{shoe.description}</div>

        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">
            {shoe.price}
          </div>
          <Select
            value={form.qty}
            onChange={(qty) => setForm({ ...form, qty })}
            title={"QTY"}
            options={QUANTITY}
          />
          <Select
            value={form.size}
            onChange={(size) => setForm({ ...form, size })}
            title={"SIZE"}
            options={SIZES}
          />
        </div>

        <div className="space-x-10">
          <button
            onClick={() => onClickAdd(shoe, form.qty, form.size)}
            className="h-14 w-44 text-white transition bg-black hover:bg-gray-900 active:bg-gray-700 active:scale-75 dark:bg-white dark:text-black"
          >
            Add to bag
          </button>
          <a href="" className="text-lg font-bold underline underline-offset-4">
            View details
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShoeDetail;
