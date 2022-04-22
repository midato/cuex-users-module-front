import { NavLink as NavLinkReactRouter } from 'react-router-dom'
import { styled } from 'styled-components'

const ActiveLink = styled.nav.a`
	font-weight: bold;
	pointer-events: none;
`

export const NavLink = ({ to, children, ...props }) => {
	return (
		<ActiveLink>
			<NavLinkReactRouter
				{...props}
				className={({ isActive }) => {
					return isActive ? 'is-active' : undefined
				}}
				to={to}>
				{children}
			</NavLinkReactRouter>
		</ActiveLink>
	)
}
