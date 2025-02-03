import React, { useState, useCallback, RefObject } from 'react';
import {
  Navbar,
  Nav,
  Container,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { HiBarsArrowDown, HiBarsArrowUp } from 'react-icons/hi2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useClickOutsideToggle from '@/hooks/OutsideClickHandler';
import styles from './styles/NavBar.module.css';
import ModalCv from './ModalCv';
import navLogo from '@/assets/imgBg.webp';
import appStyles from '@/App.module.css';
import { socialLinks } from '@/data/socialLinks';
import { navLinks } from '@/data/navLinks';

const NavBar: React.FC = () => {
  const { expanded, setExpanded, ref }: {
    expanded: boolean;
    setExpanded: (value: boolean) => void;
    ref: RefObject<HTMLDivElement>;
  } = useClickOutsideToggle(() => {
    setIsMenuOpen(false);
    setExpanded(false);
  });

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalOpen = useCallback((): void => setShowModal(true), []);
  const handleModalClose = useCallback((): void => setShowModal(false), []);

  const handleNavLinkClick = (): void => {
    setExpanded(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <Navbar
        ref={ref}
        fixed="top"
        variant="dark"
        expand="lg"
        className={`${styles.customNavbar} px-0 py-2`}
        expanded={expanded}
      >
        <Container fluid className="pe-1">
          <Nav.Link href="#hero" className="position-relative">
            <img
              src={navLogo}
              className={`position-absolute translate-middle-y top-0 start-0 ${styles.navLogo}`}
              alt="Linus Johansson"
            />
          </Nav.Link>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => {
              setExpanded(!expanded);
              setIsMenuOpen(!isMenuOpen);
            }}
            className={styles.customToggle}
          >
            {isMenuOpen ? (
              <HiBarsArrowUp className={styles.navIconToggle} />
            ) : (
              <HiBarsArrowDown className={styles.navIconToggle} />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-nav">
            <Nav className={`ms-auto my-1 my-lg-0 ${appStyles.cardBgImage}`}>
              {navLinks.map(({ id, icon: Icon, label }: { id: string; icon: React.ElementType; label: string }) => (
                <Nav.Link
                  key={id}
                  href={`#${id}`}
                  className={`${styles.navLink} my-2 my-lg-0 ms-lg-2`}
                  onClick={handleNavLinkClick}
                >
                  <Icon className={`${styles.navIcon} me-lg-2 me-3`} />
                  <span className={styles.navLinkText}>{label}</span>
                </Nav.Link>
              ))}
            </Nav>
            <Nav className="d-flex flex-row justify-content-between justify-content-sm-start ms-lg-2">
              {socialLinks.map(
                ({ id, icon, href, onClick, tooltip, iconClass }: { id: string; icon: any; href?: string; onClick?: () => void; tooltip?: string; iconClass?: string }) => (
                  <OverlayTrigger
                    key={id}
                    placement="bottom"
                    overlay={
                      <Tooltip
                        id={`tooltip-${id}`}
                        className={appStyles.customTooltip}
                      >
                        {tooltip}
                      </Tooltip>
                    }
                  >
                    <Nav.Link
                      href={href}
                      onClick={
                        id === 'download-pdf' ? handleModalOpen : onClick
                      }
                      target={href ? '_blank' : undefined}
                      className={`ms-lg-0 ms-1 me-lg-0 me-sm-5 me-2 mt-3 mt-lg-0 ${id === 'certificate' || id === 'source-code' ? 'd-lg-none' : ''}`}
                    >
                      <FontAwesomeIcon
                        icon={icon}
                        className={`${appStyles.socialIcon} ${iconClass} px-0`}
                      />
                    </Nav.Link>
                  </OverlayTrigger>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalCv show={showModal} handleClose={handleModalClose} />
    </>
  );
};

export default NavBar;
