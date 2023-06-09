const ProfitLossDescription = (Props: {
  type: "loss" | "profit";
  profitLossAmount: number;
  roi: number;
}) => {
  return (
    <>
      <p className="text-nord3 text-xs tracking-widest">
        預估{Props.type === "profit" ? "獲利" : "虧損"}{" "}
        <span
          className={Props.type === "profit" ? "text-nord8" : "text-nord11"}
        >
          {Props.profitLossAmount.toFixed(2)}USDT
        </span>
        ，回報率{" "}
        <span
          className={Props.type === "profit" ? "text-nord8" : "text-nord11"}
        >
          {(Props.roi * 100).toFixed(2)}%
        </span>
      </p>
    </>
  );
};

export default ProfitLossDescription;
