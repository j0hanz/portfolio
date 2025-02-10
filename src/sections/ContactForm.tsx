import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Card,
} from 'react-bootstrap';
import {
  HiOutlineTrash,
  HiOutlinePaperAirplane,
  HiEnvelope,
} from 'react-icons/hi2';
import EmailHandler from '@/api/emailJs';
import styles from './styles/ContactForm.module.css';
import appStyles from '@/App.module.css';
import { validateForm } from '@/utils/validation';
import { toast } from 'react-toastify';
import FormContact from '@/form/contact';
import Badge from '@/components/Badges';
import { MotionWrapper, ObjectScaleEffectMotion } from '@/components/Motions';

interface FormData {
  name: string;
  email: string;
  company: string;
  url: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  url?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [validated, setValidated] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    url: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleEmailSent = (success: boolean) => {
    setIsSending(false);
    if (success) {
      setFormData({ name: '', email: '', company: '', url: '', message: '' });
      toast.success('Your message was sent successfully!');
    } else {
      toast.error('Failed to send message! Please try again later.');
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    const formValid = Object.keys(newErrors).length === 0;
    setValidated(formValid);
    if (formValid) {
      setIsSending(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', company: '', url: '', message: '' });
    setErrors({});
    setValidated(false);
  };

  return (
    <MotionWrapper sectionId="contact">
      <section id="contact" className={appStyles.sectionPadding}>
        <Container className={appStyles.sectionContainer}>
          <div className={appStyles.sectionTitleContainer}>
            <div>
              <HiEnvelope className={appStyles.mainIcon} />
            </div>
            <div className={appStyles.sectionTitle}>Contact</div>
          </div>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={9}>
              <ObjectScaleEffectMotion>
                <Card className={`h-100 ${appStyles.cardBgColor}`}>
                  <Card.Body className={appStyles.formBody}>
                    <Form noValidate onSubmit={handleSubmit}>
                      <FormContact
                        formData={formData}
                        errors={errors}
                        handleChange={handleChange}
                      />
                      <div className="d-flex justify-content-between mt-3 p-2">
                        <Button
                          className={styles.clearButton}
                          type="button"
                          onClick={handleReset}
                          disabled={isSending}
                        >
                          <HiOutlineTrash className={styles.buttonIconClear} />
                        </Button>

                        <Button
                          className={styles.submitButton}
                          type="submit"
                          disabled={isSending}
                        >
                          {isSending ? (
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
                              <HiOutlinePaperAirplane
                                className={styles.buttonIcon}
                              />
                              <span className={styles.buttonText}>Send</span>
                            </>
                          )}
                        </Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
                {validated && (
                  <EmailHandler
                    formData={formData}
                    onEmailSent={handleEmailSent}
                  />
                )}
                <Badge />
              </ObjectScaleEffectMotion>
            </Col>
          </Row>
        </Container>
      </section>
    </MotionWrapper>
  );
};

export default ContactForm;
