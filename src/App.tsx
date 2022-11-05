import { ChangeEvent, FC, useState } from "react";
import "./App.css";
import Grocerylist from "./components/Grocerylist";
import { IList } from "./Interfaces";

const App: FC = () => {
  const [product, setProduct] = useState<string>("");
  const [amount, setAmount] = useState<number>(1);
  const [grocerylist, setGrocerylist] = useState<IList[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "product") {
      setProduct(e.target.value);
    } else {
      setAmount(Number(e.target.value));
    }
  };
  const handleSubmit = (): void => {
    const newList = { product: product, amount: amount };
    setGrocerylist([...grocerylist, newList]);
    setProduct("");
    setAmount(1);
  };

  const removelistItem = (removeItem:string):void => {
    setGrocerylist(grocerylist.filter((glist)=> glist.product !== removeItem))
  }


  return (
    <div className="flex w-screen	h-screen flex-col items-center">
      <div className="flex basis-2/6 w-full justify-center items-center bg-orange-400">
        <div className="flex flex-col">
          <input
            className="w-52 h-10 rounded-lg pl-2.5 text-base border border-solid border-gray-400"
            type="text"
            placeholder="product"
            name="product"
            value={product}
            onChange={handleChange}
          />
          <input
            className="w-52 h-10 rounded-lg pl-2.5 text-base border border-solid border-gray-400"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="amount"
            name="amount"
            value={amount}
            onChange={handleChange}
          />
        </div>
        <button
          className="h-20 w-36 border-solid border-gray-400 border rounded-lg cursor-pointer ml-3 text-white bg-red-400 items-center"
          onClick={handleSubmit}
        >
          Add product
        </button>
      </div>
      <ul className="flex flex-col basis-8/12 w-full items-center pt-12">
        {grocerylist.map((glist: IList, index: number) => {
         return <li key={index}>
          <Grocerylist glist={glist} removelistItem={removelistItem}  isChecked={true} />
          </li>
        })}
      </ul>
    </div>
  );
};

export default App;
