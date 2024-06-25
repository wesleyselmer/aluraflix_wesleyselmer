import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";

const LinkEstilizado = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12vw;
  height: 4vw;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 15px;

  background-color: ${(props) => (props.$ativo ? "#00000090" : "transparent")};
  border: ${(props) =>
    props.$ativo ? "2px solid #2271D1" : "2px solid #FFFFFF"};
  color: ${(props) => (props.$ativo ? "#2271D1" : "#FFFFFF")};
  box-shadow: ${(props) => (props.$ativo ? "inset 0 0 10px 5px #2271d1" : "")};
`;

function NavBarLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const ehAtivo = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <LinkEstilizado to={to} $ativo={ehAtivo} {...props}>
      {children}
    </LinkEstilizado>
  );
}

export default NavBarLink;
