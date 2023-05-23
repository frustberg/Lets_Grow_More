import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom';

const FormPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [webURL, setWebURL] = useState('')
    const [imgLink, setImgLink] = useState('')
    const [gender, setGender] = useState('male')
    const [skills, setSkills] = useState([]);
    const [usersData, setUsersData] = useState([]);


    const handleSkillChange = (e) => {

        const selectedSkill = e.target.value;
        if (e.target.checked) {
            setSkills((prevSkills) => [...prevSkills, selectedSkill]);
        } else {
            setSkills((prevSkills) => prevSkills.filter((skill) => skill !== selectedSkill));
        }
    };

    const submitData = (eve) => {
        eve.preventDefault();
        let payload = { name, email, webURL, imgLink, gender, skills }
        setUsersData([...usersData, payload])
        console.log(payload)
    }

    const clearData = (eve) => {
        eve.preventDefault();
        setName('')
        setEmail('')
        setWebURL('')
        setImgLink('')
        setGender('Options')
        setSkills([])
    }



    return (
        <>
            <Link to='/' style={{ textDecoration: 'none'}}>
                <h2 className='text-center bg-success text-white p-3'>Student Enrollment Form</h2>
            </Link>
            <Container>
                <Row>
                    <Col>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name </label>
                                <input type="email" className="form-control" value={name} onChange={(ev) => setName(ev.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                <input type="email" className="form-control" value={email} onChange={(ev) => setEmail(ev.target.value)} id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Website</label>
                                <input type="text" className="form-control" value={webURL} onChange={(ev) => setWebURL(ev.target.value)} id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Image Link</label>
                                <input type="text" value={imgLink} onChange={(ev) => setImgLink(ev.target.value)} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className='d-inline-flex mb-3'>
                                <span className='font-weight-bold'>Gender :</span>
                                <div className="form-check">
                                    <input className="form-check-input mx-1" value={gender} onChange={(ev) => setGender(ev.target.value)} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input mx-3" value={gender} onChange={(ev) => setGender(ev.target.value)} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Female
                                    </label>
                                </div>
                            </div> <br />

                            <div className="d-inline-flex">
                                Skills :
                                <div className="mb-3 form-check mx-5">
                                    <input type="checkbox" value="Java" checked={skills.includes("Java")} onChange={handleSkillChange} className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Java</label>
                                </div>
                                <div className="mb-3 form-check -mx-5">
                                    <input type="checkbox" className="form-check-input" value="Html" checked={skills.includes("Html")} onChange={handleSkillChange} id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">HTML</label>
                                </div>
                                <div className="mb-3 form-check mx-3 mb-4">
                                    <input type="checkbox" className="form-check-input mx-2" value="CSS" checked={skills.includes("CSS")} onChange={handleSkillChange} id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">CSS</label>
                                </div>
                            </div> <br />

                            <button onClick={submitData} type="button" className="btn btn-outline-success">Enroll Student</button>
                            <button onClick={clearData} type="button" className="btn btn-outline-danger mx-5">Clear</button>
                        </form>
                    </Col>

                    {/* Card Show Here Below */}
                    {/* <Col>Line</Col> */}
                    <Col>
                        <div className="container mx-auto mt-4">
                            <div className="justify-content-center align-items-center ">
                                <div className="card-container ">
                                    {usersData.map((val, key) => (
                                        <div className="card mb-2" style={{ width: '25em' }} key={key}>
                                            <img src={val.imgLink} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{val.name}</h5>
                                                <h6 className="card-text">{val.gender}</h6>
                                                <p className="card-text">
                                                    <small className="text-body-secondary">{val.email}</small>
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-body-secondary">{val.webURL}</small>
                                                </p>
                                                <div className="d-inline-flex">
                                                    {val.skills.map((v, k) => (
                                                        <p key={k} className="list-group-item">
                                                            {v + ','}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* {usersData.map((val, key) => {
                                    return (
                                        <div className="col-md-4 " key={key}>
                                            <div className="card" style={{ width: '25em' }}>
                                                <img src={val.imgLink} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{val.name}</h5>
                                                    <h6 className="card-text">{val.gender}</h6>
                                                    <p className="card-text"><small className="text-body-secondary">{val.email}</small></p>
                                                    <p className="card-text"><small className="text-body-secondary">{val.webURL}</small></p>
                                                    <div className="d-inline-flex">
                                                        {
                                                            val.skills.map((v, k) => <p key={k} className="list-group-item">{v +','}</p>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })} */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FormPage
