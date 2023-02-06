import style from './CharacterProfile.module.scss'
import CardSection from '../CardCharacter/CardSection';

export type CharacterProfile = {
    id: number;
    name: string;
    image: string;
    species: string;
    origin: {
      name: string
    }
};

const CharacterProfile: React.FunctionComponent<CharacterProfile> = ({ id, name, image, species, origin }) => {

    return (
        <div className={style.profile}>
            <div className={style.img}>
                <img src={image} alt={name} />
            </div>
            <div className={style.desc}>
                <h2 className={style.name}>{name}</h2>
                <CardSection title="Name" text={name} />
                <CardSection title="Species" text={species} />
                <CardSection title="Origin" text={origin.name} />
            </div>
        </div>
    );
};

export default CharacterProfile;
