import * as C from "./styles";
function ResumeItem({ title, value, Icon }) {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title} </C.HeaderTitle>
        <Icon />
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  );
}

export default ResumeItem;
