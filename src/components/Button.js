import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const getStyleName = (btn) => {
  const className = {
    "=": "equals",
    'x': "opt",
    "-": "opt",
    "/": "opt",
    "+": "opt",
  };
  return className[btn];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  // User clicks on a comma (.)
  const commaClick = () => {
    if (!calc.num.toString().includes(".")) {
      setCalc({
        ...calc,
        num: calc.num + value,
      });
    }
  };

  // User clicks on C
  const resetClick = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };

  // User clicks on a number
  const handleClickbtn = () => {
    const numberString = value.toString();
    const numberValue =
      numberString === "0" && calc.num === 0
        ? 0
        : Number(calc.num + numberString);

    setCalc({
      ...calc,
      num: numberValue,
    });
  };

  // User clicks on an operation
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  // User clicks on equals (=)
  const equalsClick = () => {
    const math = (a, b, sign) => {
      const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "x": (a, b) => a * b,
        "/": (a, b) => a / b,
      };
      return operations[sign](a, b);
    };

    if (calc.res && calc.num) {
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  // Determine the button action
  const handleBtnClick = () => {
    const actions = {
      ".": commaClick,
      "C": resetClick,
      "+": signClick,
      "-": signClick,
      "x": signClick,
      "/": signClick,
      "=": equalsClick,
    };

    if (actions[value]) {
      return actions[value]();
    } else {
      return handleClickbtn();
    }
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
};

export default Button;
