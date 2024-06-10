import styled from "styled-components"

const DivTags = styled.div`
    width: 296.82px;
    height: 92px;
    background-color: ${props => props.$cor};
    color: #F5F5F5;
    font-size: 48px;
    font-weight: bolder;
    line-height: auto;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
`

function ClassTags({ children }) {
    function defineCorTag() {
        switch(children){
            case 'BACK END':
                return '#00C86F';
            case 'FRONT END':
                return '#6BD1FF';
            case 'MOBILE':
                return '#FFBA05';
        }
    }
    
    return (
        <DivTags $cor={defineCorTag()}>
            {children}
        </DivTags>
    )
}

export default ClassTags