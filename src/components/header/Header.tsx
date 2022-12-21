import s from "./header.module.sass"

import logo from "../../resources/header/logo.png"

const Header = () => {

    return (
        <div className = {s.header}>
            <img className={s.logo} src={logo}/>
        </div>
    )
}

export default Header
