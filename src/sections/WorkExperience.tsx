import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  HiBriefcase,
  HiOutlineBuildingOffice,
  HiOutlineCalendar,
} from 'react-icons/hi2';
import styles from './styles/WorkExperience.module.css';
import appStyles from '@/App.module.css';
import ScrollRevealWrapper from '@/components/ScrollWrapper';
import experiences from '@/data/experiences';
import MotionWrapper from '@/components/Motions';

interface Experience {
  title: string;
  workplace: string;
  duration: string;
  description: string[];
}

const WorkExperience: React.FC = () => {
  /* Render individual experience card */
  const renderExperience = (experience: Experience, index: number) => (
    <Col lg={6} className="mb-4" key={index}>
      <Card
        className={`h-100 ${styles.experienceCard} ${appStyles.cardBgColor}`}
      >
        <Card.Body className={appStyles.cardBody}>
          <Card.Title className={`${appStyles.cardHeader} mb-2`}>
            <span>{experience.title}</span>
          </Card.Title>
          <Card.Subtitle className="mb-3 d-flex align-items-center">
            <div className={appStyles.customBadge}>
              <HiOutlineBuildingOffice className="me-2" />
              <span className={appStyles.badgeText}>
                {experience.workplace}
              </span>
            </div>
            <span className={appStyles.customBadge}>
              <HiOutlineCalendar className="me-2" />
              <span className={appStyles.badgeText}>{experience.duration}</span>
            </span>
          </Card.Subtitle>
          <ul className={`${styles.listItems} ${appStyles.cardText}`}>
            {experience.description.map((item, i) => (
              <li key={i}>
                <small>{item}</small>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <MotionWrapper>
      <section id="work-experience" className={appStyles.sectionPadding}>
        <Container className={appStyles.sectionContainer}>
          <div className={appStyles.sectionTitleContainer}>
            <div>
              <HiBriefcase className={appStyles.mainIcon} />
            </div>
            <div className={appStyles.sectionTitle}>Experience</div>
          </div>
          <Row>{experiences.map(renderExperience)}</Row>
        </Container>
      </section>
    </MotionWrapper>
  );
};

export default WorkExperience;
