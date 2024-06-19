import ClassTags from '@/components/ClassTags';
import styled from 'styled-components';
import Card from './Card';

const DivCards = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 40px 40px;
    gap: 40px;
    
    position: relative;
    top: -35px;
`

const DivCard = styled.div`
    width: calc(100vw - 80px);
    display: flex;
    gap: 30px;
`

function Cards({ tipo, quantidade }) {
    return (
        <DivCards>
            <ClassTags local='main'>{tipo}</ClassTags>
            <DivCard>
                <Card img="FE_01.png" />
                <Card img="FE_02.png" />
                <Card img="FE_03.png" />
            </DivCard>
        </DivCards>
    )
}

export default Cards