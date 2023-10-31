'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Container, Nav, Navbar } from "react-bootstrap"

export default function NavBar() {

    const pathname = usePathname();

    return (
        <Navbar bg="primary" variant="dark" sticky="top" expand="sm"
            collapseOnSelect>
                <Container>
                    <Navbar.Brand as={Link} href="/">
                        Next.JS Image Gallery
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar" />
                    <Navbar.Collapse id="main-navbar">
                        <Nav>
                            <Nav.Link as={Link} active={pathname === '/hello'} href="/hello">Hello</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}