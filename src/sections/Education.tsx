import React, { useState, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
import Button from '@/components/Button';

interface EducationItem {
  title: string;
  school: string;
  duration: string;
  description?: string[];
  hasCredential: boolean;
}

const Education: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = useCallback(() => setShowModal(true), []);
  const handleCloseModal = useCallback(() => setShowModal(false), []);

  const renderEducationItem = (edu: EducationItem, index: number) => (
    <Col lg={6} className="mb-4" key={index}>
      <Card
        title={edu.title}
        subtitle={
          <>
            <div className={appStyles.customBadge}>
              <HiOutlineBuildingLibrary className="me-1" />
              <span className={appStyles.badgeText}>{edu.school}</span>
            </div>
            <div className={appStyles.customBadge}>
              <HiOutlineCalendar className="me-1" />
              <span className={appStyles.badgeText}>{edu.duration}</span>
            </div>
          </>
        }
      >
        {edu.description && (
          <div className={`${appStyles.cardText} mb-2`}>
            {edu.description.map((desc, i) => (
              <div key={i}>{desc}</div>
            ))}
          </div>
        )}
        {edu.hasCredential && (
          <Button
            onClick={handleShowModal}
            className={`${styles.customButton} ${styles.credentialButton}`}
            icon={<HiMiniCheckBadge className={styles.buttonIcon} />}
            text="Credential"
          />
        )}
      </Card>
    </Col>
  );

  return (
    <section id="education" className={appStyles.sectionPadding}>
      <Container className={appStyles.sectionContainer}>
        <div className={appStyles.sectionTitleContainer}>
          <div>
            <HiAcademicCap className={appStyles.mainIcon} />
          </div>
          <div className={appStyles.sectionTitle}>Education</div>
        </div>
        <Row>{education.map(renderEducationItem)}</Row>
        <Credential show={showModal} handleClose={handleCloseModal} />
      </Container>
    </section>
  );
};

export default Education;
