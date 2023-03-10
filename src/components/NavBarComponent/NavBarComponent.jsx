import React from 'react'
import NavItem from './NavItem'
import styles from "./NavComponent.module.css"
import { CartWidget } from './CartWidget'

export const NavBarComponent = () => {
  return (
    <nav className={styles.nav}>
      <header>CaldeNik Store</header>
      <div className={styles.navItems}>
        <NavItem label="Inicio" src="#" />
        <NavItem label="Cursos" src="#" />
        <NavItem label="Sobre Nosotros" src="#" />
        <NavItem label="Contactanos" src="#" />
      </div>
      <div className={styles.navCounter}>
        <CartWidget/>
        <p>3</p>
        </div>
    </nav>
  )
}