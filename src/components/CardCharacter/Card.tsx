import React from 'react';
import style from './Card.module.scss';
import { Link } from 'react-router-dom';
import { CharacterRequestResults } from '../../assets/types';
import CardSection from './CardSection';

const Card: React.FunctionComponent<CharacterRequestResults> = ({ id, name, image, status, species, origin, gender, created }) => {
    
    const statusClass = status !== 'Alive' ? style[status] : ''

    const creationDate = new Date(created)
                    .toLocaleDateString('en-us', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric'
                    });

    return (
        <div className={style.card}>
            <div className={style.imgHolder}>
                <Link to={`/characters/${id}`}>
                    <img src={image} alt={name} className={style.img} />
                </Link>
            </div>

            <div className={style.info}>
                <div className={style.header}>
                    <h3 className={style.heading}>
                        <Link to={`/characters/${id}`} className={style.headingLnk}>
                            {name}
                        </Link>
                    </h3>
                    <div
                        className={`
                            ${style.desc} 
                            ${statusClass}
                        `}
                    >
                        <span className={style.status}>
                            {status} - {species}
                        </span>
                    </div>
                </div>
                <CardSection title="Gender" text={gender} />
                <CardSection title="Origin" text={origin.name} />
                <CardSection title="Created" text={creationDate} />
            </div>
        </div>
    );
};

export default Card;
