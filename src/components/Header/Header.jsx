import { TbReportMoney } from "react-icons/tb";
import * as C from "./styles";

function Header() {
  return (
    <>
      <C.Container>
        <C.Header>
          <C.Title>
            Financial Control <TbReportMoney />
          </C.Title>
        </C.Header>
      </C.Container>
    </>
  );
}

export default Header;
