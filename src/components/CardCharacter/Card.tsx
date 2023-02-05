import React from 'react';
import style from './Card.module.scss';
import { CharacterRequestResults, CharacterToDisplay } from '../../assets/types';
import CardSection from './CardSection';

const Card: React.FunctionComponent<CharacterRequestResults> = ({ id, name, image, status, species, origin, gender, created }) => {
    return (
        <div className={style.card}>
            <div className={style.imgHolder}>
                <img src={image} alt={name} className={style.img} />
            </div>

            <div className={style.info}>
                <div className={style.header}>
                    <h3 className={style.heading}>{name}</h3>
                    <div className={style.desc}>
                        <span className={style.status}>
                            {status} - {species}
                        </span>
                    </div>
                </div>
                <CardSection title="Gender" text={gender} />
                <CardSection title="Origin" text={origin.name} />
                <CardSection title="Created" text={created} />
            </div>
        </div>
    );
};

export default Card;
