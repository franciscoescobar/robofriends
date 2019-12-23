import React from 'react'
import Card from '../Card';
const CardList = ({list}) => {

    return (
        <div>
            {list.map(card => 
                (
                    <Card key={card.name} name={card.name} mail={card.email}></Card>
                )
            )}
        </div>
    );
}

export default CardList;