import styled from "styled-components";
import item1 from "./imeges/도넛1.jpeg";
import item2 from "./imeges/도넛2.jpeg";
import item3 from "./imeges/도넛3.png";


const ContainerImage = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`

const MainImeges = styled.img`
    width: 100%;
    heigth: 100%;
    object-fit: cover;
    object-position: center;
`
const BestMenu = styled.div`
    display: flex;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    #item1 {
        color: #FFA0C5;
        font-weight: bold;
        font-size: 20px;
        padding: 20px;
    }
    #item2 {
        font-size: 30px;
        padding-left: 20px;
    }
    #item3 {
        padding-left: 20px;
    }
    #item4 {
        padding-left: 20px;
        padding-top: 10px;
        font-size: 25px;
        color: #bbb
    }
`

const BestImg = styled.div`
    img{
        width: 200px;
    }
`

export default function MainImege() {
    return(
        <ContainerImage>
            <MainImeges src="https://img-app.knotted-order.com/app/banners/47/47" alt="메인 이미지" />
                <BestMenu>
                    <div>
                        <div id="item1">OUR BEST MENU</div>
                        <div id="item2">Milk Cream Donut</div>
                        <div id="item3">우유 생크림 도넛</div>
                        <div id="item4">3,900원</div>
                    </div>
                    <BestImg>
                        <div>
                            <img src={item1}/>
                            <img src={item2}/>
                            <img src={item3}/>
                        </div>
                    </BestImg>
                </BestMenu>
        </ContainerImage>
    )
}