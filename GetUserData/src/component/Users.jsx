import React, { useState } from 'react'
import axios from 'axios';
import '../App.scss'
import Loader from '../component/Loader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getUsers = () => {
        setIsLoading(true);

        axios
            .get('https://reqres.in/api/users?page=1')
            .then((response) => {
                setTimeout(() => {
                    setIsLoading(false);
                    setUsers(response.data.data);
                }, 2000);
            })
            .catch((error) => {
                setIsLoading(false);
                alert(error.message);
            });
    };

    return (
        <>
            <div className="container-fluid bg-dark text-white py-3 px-5 d-flex justify-content-between align-items-center">
                <Link style={{textDecoration: 'none', color: 'white'}}>
                    <h2 >M.Babar Waseem</h2>
                </Link>
                <div>
                    <button onClick={getUsers} className='btn btn-light' >Get Users</button>
                </div>
            </div>
            {/* <Loader /> */}
            <Container fluid className='bg-dark'>

                <Container className=''>
                    <Row style={{ height: '88.8vh' }}>

                        {isLoading && <div className='bg-dark d-flex justify-content-center  ' style={{ height: '90vh' }}>
                            <Loader /></div>}
                        {
                            users.length > 0 &&
                            users.map((val) => (

                                <Col md={6} key={val.id}>


                                    <div className="card mb-3" >
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={val.avatar} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{val.first_name} {val.last_name}</h5>
                                                    <p className="card-text"><small className="text-body-secondary">{val.email}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>

                </Container>

            </Container>
        </>
    )
}

export default Users
