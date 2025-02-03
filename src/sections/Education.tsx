import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {
  HiAcademicCap,
  HiMiniCheckBadge,
  HiOutlineBuildingLibrary,
  HiOutlineCalendar,
} from 'react-icons/hi2';
import Credential from '@/components/Credential';
import styles from './styles/Education.module.css';
import appStyles from '@/App.module.css';
import ScrollRevealWrapper from '@/components/ScrollWrapper';
import education from '@/data/education';

interface EducationItem {
  title: string;
  school: string;
  duration: string;
  description?: string[];
  hasCredential: boolean;
}

const Education: React.FC = () => {
  /* State to manage the visibility of the credential modal */
  const [showModal, setShowModal] = useState(false);

  /* Toggles the credential modal open or closed */
  const toggleModal = () => setShowModal((prevShowModal) => !prevShowModal);

  /* Renders each education item in a card with title, school, duration, and optional credential */
  const renderEducationItem = (edu: EducationItem, index: number) => (
    <Col lg={6} className="mb-4" key={index}>
      <Card
        className={`h-100 ${styles.educationCard} ${appStyles.cardBgColor}`}
      >
        <Card.Body className={appStyles.cardBody}>
          <Card.Title className={`${appStyles.cardHeader} mb-2`}>
            <span>{edu.title}</span>
          </Card.Title>
          <Card.Subtitle className="mb-3 d-flex align-items-center">
            <div className={appStyles.customBadge}>
              <HiOutlineBuildingLibrary className="me-2" />
              <span className={appStyles.badgeText}>{edu.school}</span>
            </div>
            <span className={appStyles.customBadge}>
              <HiOutlineCalendar className="me-2" />
              <span className={appStyles.badgeText}>{edu.duration}</span>
            </span>
          </Card.Subtitle>
          {edu.description && (
            <Card.Text className={appStyles.cardText}>
              {edu.description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </Card.Text>
          )}
          {edu.hasCredential && (
            <Button onClick={toggleModal} className={appStyles.btnCredential}>
              <HiMiniCheckBadge className={appStyles.certificateIcon} />
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <ScrollRevealWrapper>
      <section id="education" className={appStyles.sectionPadding}>
        <Container className={appStyles.sectionContainer}>
          <div className={appStyles.sectionTitleContainer}>
            <div>
              <HiAcademicCap className={appStyles.mainIcon} />
            </div>
            <div className={appStyles.sectionTitle}>Education</div>
          </div>
          <Row>{education.map(renderEducationItem)}</Row>
          {/* Renders the credential modal if showModal is true */}
          <Credential show={showModal} handleClose={toggleModal} />
        </Container>
      </section>
    </ScrollRevealWrapper>
  );
};

export default Education;
