import React, { useState, useCallback } from 'react';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';
import Image from '@/assets/image_me.webp';
import styles from './styles/Hero.module.css';
import { HiOutlineEnvelope, HiOutlineArrowDownTray } from 'react-icons/hi2';
import ModalCv from '@/components/ModalCv';
import ImageModal from '@/components/ImageModal';
import appStyles from '@/App.module.css';

const Hero: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const handleModalOpen = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
    }, 1000);
  }, []);

  const handleModalClose = useCallback(() => setShowModal(false), []);
  const handleImageModalOpen = useCallback(() => setShowImageModal(true), []);
  const handleImageModalClose = useCallback(() => setShowImageModal(false), []);

  const buttonBaseClass = `${styles.heroButton}`;
  const downloadButtonClass = `${buttonBaseClass} my-4 ${styles.downloadButton}`;
  const contactButtonClass = `${buttonBaseClass} ${styles.contactButton}`;

  return (
    <section id="hero" className={`text-center ${appStyles.sectionPadding}`}>
      <Container className={appStyles.sectionContainer}>
        <Row className="d-flex justify-content-center">
          <Col md={5}>
            <img
              src={Image}
              alt="Linus Johansson"
              className={styles.heroImage}
              onClick={handleImageModalOpen}
            />
          </Col>
          <Col xs="auto" className="text-center text-lg-start">
            <div className={styles.gradientText}>Linus Johansson</div>
            <div
              className={`text-body-secondary fw-semibold my-2 ${styles.developerTitle}`}
            >
              Junior Full-Stack Developer
            </div>
            <div className="d-flex flex-column align-items-center align-items-lg-start mt-3">
              <Button
                onClick={handleModalOpen}
                disabled={loading}
                className={downloadButtonClass}
              >
                {loading ? (
                  <Spinner
                    variant="light"
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  <>
                    <HiOutlineArrowDownTray
                      className={`${appStyles.buttonIcon} ${styles.buttonIcon}`}
                    />
                    <span className={appStyles.buttonText}>Download CV</span>
                  </>
                )}
              </Button>
              <Button href="#contact" className={contactButtonClass}>
                <HiOutlineEnvelope className={appStyles.buttonIcon} />
                <span className={appStyles.buttonText}>Get in Touch</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <ModalCv show={showModal} handleClose={handleModalClose} />
      <ImageModal show={showImageModal} handleClose={handleImageModalClose} />
    </section>
  );
};

export default Hero;
