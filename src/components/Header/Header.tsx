import style from './Header.module.scss'

const Header = () => {
    return (
        <h1 className={style.main}>
            Rick<span className={style.small}>and</span>Morty
            <br />
            <span className={style.small}>characters</span>
        </h1>
    );
};

export default Header;
