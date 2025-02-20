import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  HiAcademicCap,
  HiMiniCheckBadge,
  HiOutlineBuildingLibrary,
  HiOutlineCalendar,
} from 'react-icons/hi2';
import Credential from '@/components/Credential';
import Card from '@/components/Card';
import styles from './styles/Education.module.css';
import appStyles from '@/App.module.css';
import education from '@/data/education';
import { MotionWrapper } from '@/components/Motions';

interface EducationItem {
  title: string;
  school: string;
  duration: string;
  description?: string[];
  hasCredential: boolean;
}

const Education: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prevShowModal) => !prevShowModal);

  const renderEducationItem = (edu: EducationItem, index: number) => (
    <Col lg={6} className="mb-4" key={index}>
      <Card
        title={edu.title}
        subtitle={
          <>
            <div className={appStyles.customBadge}>
              <HiOutlineBuildingLibrary className="me-2" />
              <span className={appStyles.badgeText}>{edu.school}</span>
            </div>
            <span className={appStyles.customBadge}>
              <HiOutlineCalendar className="me-2" />
              <span className={appStyles.badgeText}>{edu.duration}</span>
            </span>
          </>
        }
      >
        {edu.description && (
          <p className={appStyles.cardText}>
            {edu.description.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}
          </p>
        )}
        {edu.hasCredential && (
          <Button onClick={toggleModal} className={appStyles.btnCredential}>
            <HiMiniCheckBadge className={appStyles.certificateIcon} />
          </Button>
        )}
      </Card>
    </Col>
  );

  return (
    <MotionWrapper sectionId="education">
      <section id="education" className={appStyles.sectionPadding}>
        <Container className={appStyles.sectionContainer}>
          <div className={appStyles.sectionTitleContainer}>
            <div>
              <HiAcademicCap className={appStyles.mainIcon} />
            </div>
            <div className={appStyles.sectionTitle}>Education</div>
          </div>
          <Row>{education.map(renderEducationItem)}</Row>
          <Credential show={showModal} handleClose={toggleModal} />
        </Container>
      </section>
    </MotionWrapper>
  );
};

export default Education;
