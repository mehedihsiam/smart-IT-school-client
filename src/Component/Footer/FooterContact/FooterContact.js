import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

import './FooterContact.css'


const FooterContact = () => {
    return (
        <Container className='my-3'>
            <div className='color-white contact-header'>
                Contacts
            </div>
            <Row>
                <Col sm={12} className='my-2 d-flex align-items-center'>
                    <Row className='d-flext align-items-center'>
                        <Col sm={2}>
                            <div className='footer-icons color-white'>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                        </Col>
                        <Col sm={10}>
                            <address className='color-white'>
                                Chowrongi Super Market, Shop No: 4,5,6,7,8 (4th Floor) Savar bustand , savar, Dhaka-1340.
                            </address>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} className='my-2 d-flex align-items-center'>
                    <Row className='d-flext align-items-center'>
                        <Col sm={2}>
                            <div className='footer-icons color-white'>
                                <FontAwesomeIcon icon={faPhoneAlt} />
                            </div>
                        </Col>
                        <Col sm={10}>
                            <div className='mx-3'>
                                <p className='color-white'>
                                    +880 1688667870
                                </p>
                                <p className='color-white'>
                                    +880 1747099119
                                </p>
                            </div>
                        </Col>
                    </Row>

                </Col>
                <Col sm={12} className='my-2 d-flex align-items-center'>
                    <Row className='d-flext align-items-center'>
                        <Col sm={2}>
                            <div className='footer-icons color-white'>
                                <FontAwesomeIcon icon={faEnvelopeOpen} />
                            </div>
                        </Col>
                        <Col sm={10}>
                            <div className='mx-3'>
                                <p className='color-white'>
                                    info@smartitschool.com
                                </p>
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
};

export default FooterContact;