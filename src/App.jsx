/* eslint-disable no-unused-vars */
import "./App.css";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo";
import InputBox from "./Components/InputBox";
import { useState } from "react";
function App() {
  const [amount, setamount] = useState(0);
  const [To, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const Swap = () => {
    setFrom(To);
    setTo(from);
    setConvertedAmount(amount);
    setamount(convertedAmount);
  };
  const ConvertValue = () => {
    setConvertedAmount(amount * currencyInfo[To]);
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              ConvertValue();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label={"From"}
                amount={amount}
                onAmountChange={(Amount) => setamount(Amount)}
                onCurrencyChange={(Currency) => setamount(Currency)}
                selectCurrency={from}
                currncyOption={options}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={Swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currncyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={To}
                onAmountChange={(amount) => setamount(amount)}
              />
            </div>
            <button
              type="submit"
              className=" bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
