import { NavLink } from "react-router-dom"

const Header = () => {

    return (
        <div className="header">
            <NavLink to='/bank'>BankReducer</NavLink>
            <NavLink to='/counter'>CounterReducer</NavLink>
            <NavLink to='/theme'>ParentTheme</NavLink>
        </div>
    )
}

export default Header