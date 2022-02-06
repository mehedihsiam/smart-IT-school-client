import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import './TopBarInfo.css'

const TopBarInfo = () => {
    return (
        <div>
            <Row className='align-items-center'>
                <Col md={6} sm={6} xs={12}>
                    <p className='contact'>
                        <span className='phone-icon'>
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </span>
                        (+880) 1688-667870
                    </p>
                </Col>
                <Col md={6} sm={6} xs={12}>
                    <a className='social-icons' rel='noreferrer' target='_blank' href="https://www.facebook.com/SmartItSchool.com.bd">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                    <a className='social-icons' rel='noreferrer' target='_blank' href="https://www.facebook.com/SmartItSchool.com.bd">
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </a>
                </Col>
            </Row>
        </div>
    );
};

export default TopBarInfo;