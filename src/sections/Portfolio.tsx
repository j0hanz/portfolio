import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row } from 'react-bootstrap';
import { HiFolder } from 'react-icons/hi2';
import appStyles from '@/App.module.css';
import projects from '@/data/projects';
import { fetchCommit } from '@/utils/fetchCommit';
import ProjectList from '@/components/ProjectList';

const Portfolio: React.FC = () => {
  const [commitHistory, setCommitHistory] = useState<Record<string, any>>({});

  const fetchHistories = useCallback(async () => {
    const combinedHistories = await fetchCommit(projects);
    setCommitHistory(combinedHistories);
  }, []);

  useEffect(() => {
    fetchHistories();
  }, [fetchHistories]);

  return (
    <section id="portfolio" className={appStyles.sectionPadding}>
      <Container className={appStyles.sectionContainer}>
        <div className={appStyles.sectionTitleContainer}>
          <div>
            <HiFolder className={appStyles.mainIcon} />
          </div>
          <div className={appStyles.sectionTitle}>Projects</div>
        </div>
        <Row>
          {projects.map((project, index) => (
            <ProjectList key={index} project={project} index={index} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
