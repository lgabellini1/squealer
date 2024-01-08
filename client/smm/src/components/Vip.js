import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { GET_USERS_CHARS } from '../models/models';



const Vip = ({ vip, impersonateVip, ...props}) => {
	
	console.log("props",props)
    return (
        <Row className="vipRow" style={props.style}>
            <Col className='col-3'>{vip.username}</Col>
            <Col className='col-2 text-center'>
                {GET_USERS_CHARS.DAY(vip)[1]} / {GET_USERS_CHARS.DAY(vip)[0] }
			</Col>
            <Col className='col-2 text-center'>
                {GET_USERS_CHARS.WEEK(vip)[1]} / {GET_USERS_CHARS.WEEK(vip)[0] }
			</Col>
            <Col className='col-2 text-center'>
                {GET_USERS_CHARS.MONTH(vip)[1]} / {GET_USERS_CHARS.MONTH(vip)[0] }
			</Col>
            <Col className='col-3'>
                <Button variant="primary" onClick={() => impersonateVip(vip)}>Impersonate</Button>
            </Col>
        </Row>
    );
};

export default Vip;