import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import style from './Navbar.module.scss'

const Navbar: React.FunctionComponent = () => {    
    return (
        <nav className={ style.nav }>
            <NavLnk to="/">
                Home
            </NavLnk>
            <NavLnk to="/characters">
                Characters
            </NavLnk>
            <NavLnk to="/about">
                About
            </NavLnk>
        </nav>
    );
};

type NavLnk = {
    to: string,
    children: string
}

function NavLnk({to, children}: NavLnk) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname })

    return (
        <Link 
            to={ to } 
            className={ `${style.lnk} ${isActive ? style.active : ''}` }
        >
            { children }
        </Link>
    )
}

export default Navbar;
