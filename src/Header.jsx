import styled from "styled-components";
import MENU from"./imeges/Menu.png";
import Logo from"./imeges/Logo.png";


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #FDFAF7
  `
const GlobalNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  img {
    width: 50px;
    margin:10px;
  }
`

const SmallNav = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
    div {
      padding: 0 15px;
      cursor: pointer;
    &:hover{
      color: gray;
    };
  };
`

export default function Header(){
    return (
        <Container>
            <GlobalNav>
                <div>
                  <img src={MENU} alt="MENU"/>
                </div>
                <div>
                  <img src={Logo} alt="Logo"/>
                </div>
                <SmallNav>
                    <div>LOGIN</div>
                    <div>MY PAGE</div>
                    <div>CART</div>
                </SmallNav>
            </GlobalNav>
        </Container>
        );
};