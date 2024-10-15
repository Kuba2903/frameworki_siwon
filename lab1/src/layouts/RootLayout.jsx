import NavMenu from './NavBarMenu';

function RootLayout({ children }) {

  const menuItems = [
    {id: 1, label: "Home"},
    {id: 2, label: "Laboratorium 1"}, 
    {id: 3, label: "Laboratorium 2"}
    ];

    return (
      <div>
        <NavMenu items = {menuItems}/>
        <div>{children}</div>
      </div>
    );
  }

export default RootLayout;