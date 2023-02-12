import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      bg="dark"
      style={{ marginBottom: "20px" }}
    >
      <Container>
        <Navbar.Brand href="/">Countries App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;
