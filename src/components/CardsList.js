import style from './CardsList.module.scss';
import Card from "./Card/Card";
import React from "react";

function CardsList(props) {
    return (
        <div className={style['cards-list']}>
            <h1 className={style['cards-title']}>Ты сегодня покормил кота?</h1>
            <div className={style.cards}>
                {(props.catFood.length > 0) ? props.catFood.map((food, index) => <Card
                    key={index}
                    title={food.title}
                    name={food.name}
                    taste={food.taste}
                    portions={food.portions}
                    mouse={food.mouse}
                    kg={food.kg}
                    description={food.description}
                    countProduct={food.countProduct}
                />) : "Пусто"}
            </div>
        </div>
    )
}

export default CardsList;
