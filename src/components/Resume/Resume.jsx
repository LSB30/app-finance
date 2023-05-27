import ResumeItem from "../ResumeItem/ResumeItem";
import * as C from "./styles";
import { TbPigMoney } from "react-icons/tb";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from "react-icons/fa";
function Resume({ income, expense, total }) {
  return (
    <C.Container>
      <ResumeItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <ResumeItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title="Total" Icon={TbPigMoney} value={total} />
    </C.Container>
  );
}

export default Resume;
