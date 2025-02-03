import { FC, useCallback } from 'react';
import { Modal } from 'react-bootstrap';
import { HiOutlineGlobeAlt } from 'react-icons/hi2';
import Cv_se from '@/assets/Linus_Johansson_CV_sv.pdf';
import Cv_en from '@/assets/Linus_Johansson_CV_en.pdf';
import styles from './styles/ModalCv.module.css';
import appStyles from '@/App.module.css';
import { HiXMark } from 'react-icons/hi2';

interface ModalCvProps {
  show: boolean;
  handleClose: () => void;
}

const ModalCv: FC<ModalCvProps> = ({ show, handleClose }) => {
  const handleDownload = useCallback(
    (cv: string, fileName: string): void => {
      try {
        const link = document.createElement('a');
        link.href = cv;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        handleClose();
      } catch (error) {
        console.error('Download failed:', error);
      }
    },
    [handleClose],
  );

  return (
    <Modal show={show} onHide={handleClose} centered className={styles.modalCv}>
      <Modal.Body className={styles.modalCvBody}>
        <button className={appStyles.closeButton} onClick={handleClose}>
          <HiXMark className={appStyles.xMark} />
        </button>
        <div className={`${styles.modalCvTitle} mb-4`}>
          <HiOutlineGlobeAlt className={styles.globeIcon} />
          Choose Language
        </div>
        Select a language to download the CV.
        <div
          className={`d-flex justify-content-between ${styles.flagContainer}`}
        >
          <span
            className={`fi fi-se ${styles.flagIcon}`}
            onClick={() => handleDownload(Cv_se, 'Linus_Johansson_CV_sv.pdf')}
            title="Swedish"
          ></span>
          <span
            className={`fi fi-gb ${styles.flagIcon}`}
            onClick={() => handleDownload(Cv_en, 'Linus_Johansson_CV_en.pdf')}
            title="English"
          ></span>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalCv;
