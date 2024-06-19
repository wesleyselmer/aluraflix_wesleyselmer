import ClassTags from '@/components/ClassTags';
import styled from 'styled-components';
import Card from './Card';

const DivCards = styled.div`
    position: relative;
    top: -35px;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin: 0 40px;
    gap: 40px;
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
                <Card />
                <Card />
                <Card />
            </DivCard>
        </DivCards>
    )
}

export default Cards