import style from './Card.module.scss';
import React, {useState} from "react";

function Card(props) {

    const [toggleValue, setToggleValue] = useState(true);
    const [isHovering, setIsHovering] = useState(false);

    const onToggleCard = () => {
        setToggleValue(!toggleValue);
    }

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const selectDescription = () => {
        if (props.countProduct > 0) {
            return (toggleValue ?
                <p>Чего сидишь? Порадуй котэ, <a onClick={onToggleCard} href="#">купи</a><span>.</span>
                </p> : props.description);
        } else {
            return (<p style={{color: "#FFFF66"}}>Печалька, с рыбой закончился.</p>);
        }
    }

    const selectStateCard = () => {
        if (props.countProduct > 0) {
            return (toggleValue ? style['card-container-default'] : style['card-container-selected']);
        } else {
            return style['card-container-disabled'];
        }
    }

    return (
        <div className={style.card}>
            <div className={selectStateCard()}
                 onClick={(props.countProduct > 0) ? onToggleCard : null}
                 onMouseOver={handleMouseOver}
                 onMouseOut={handleMouseOut}>
                <div className={style['card-title']}>
                    {isHovering && !toggleValue ? <span>Котэ не одобряет?</span> : props.title}
                </div>
                <div className={style['card-name']}>{props.name}</div>
                <div className={style['card-taste-info']}>{props.taste}</div>
                <div className={style['card-portions-count']}>{props.portions}</div>
                <div className={style['card-mouse-count']}>{props.mouse}</div>
                <div className={toggleValue ? style['card-kg-info'] : style['card-kg-info-selected']}>
                    {props.kg}
                    <span>кг</span>
                </div>
            </div>
            <div className={style['card-description']}>{selectDescription()}
            </div>
        </div>
    )
}

export default Card;
