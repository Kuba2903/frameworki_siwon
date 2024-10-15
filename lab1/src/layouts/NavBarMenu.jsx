function NavBarMenu({items}) {
    return (
        <>
        <nav>
            <ul className="d-flex list-unstyled">
                {items.map(item => (
                         <li key={item.id} className="me-4 fs-5"> {/* Zwiększa margines i rozmiar tekstu */}
                         {item.label}
                        </li>
                    ))}
            </ul>
        </nav>
        
        </>
      );
}

export default NavBarMenu;