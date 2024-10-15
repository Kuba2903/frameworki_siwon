import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBarMenu({items}) {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav d-flex list-unstyled">
                    {items.map(item => (
                        <li key={item.id} className="nav-item me-4">
                            <Nav.Link href={item.url} key={item.id}>
                                {item.label}
                            </Nav.Link>
                            {/* <Link to={item.url} className="nav-link fs-5">
                                {item.label}
                            </Link> */}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
        
        </>
      );
}

export default NavBarMenu;