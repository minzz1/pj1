import styled from "styled-components";

const Footers = styled.div`
    width: 100%;
    display: flex;
    z-index: 999;
    span {
        padding:5px;
        border: 1px solid black;
    }
`

export default function footer(){
    return(
        <Footers>
            <div>
                <span>1:1문의</span>
                <span>공지사항</span>
                <span>자주묻는질문</span>
                <span>이용약관</span>
                <span>개인정보처리방침</span>
                <span>위치기반서비스이용약관</span>
            </div>
        </Footers>
    )
}