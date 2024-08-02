import React from 'react';
import { Link } from 'react-router-dom';
import useUserContext from '../UserContext';

const Home = () => {


    return (
        <div >

            <div className="homebody mb-5">
                <div className="home-content">
                    <h1 className='text-center mt-3'>Welcome to <span style={{ color: 'blue' }}>Toolkit House</span></h1>
                </div>
                <div className="homeimg">
                    <img
                        src="https://t3.ftcdn.net/jpg/05/07/77/26/360_F_507772689_yCsO1CVCw2VuQGEypGEGKZ37djJYIiew.jpg"
                        className="rounded mx-auto d-block "
                        width="70%"
                        height="100%"
                        alt="..." />
                </div>
            </div>


            <section className='m-5'style={{backgroundColor:'#C0D6E8'}} >
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-xl-8 text-center">
                        <h3 className="mb-4 mt-5">Testimonials</h3>
                        <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
                            amet numquam iure provident voluptate esse quasi, veritatis totam
                            voluptas nostrum quisquam eum porro a pariatur veniam.
                        </p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                className="rounded-circle shadow-1-strong"
                                width={150}
                                height={150}
                            />
                        </div>
                        <h5 className="mb-3">Maria Smantha</h5>
                        <h6 className="text-primary mb-3">Web Developer</h6>
                        <p className="px-xl-3">
                            <i className="fas fa-quote-left pe-2" />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                            officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center mb-0">
                            <li>
                                <i className="fas fa-star fa-sm text-warning" />
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning" />
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning" />
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning" />
                            </li>
                            <li>
                                <i className="fas fa-star-half-alt fa-sm text-warning" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                className="rounded-circle shadow-1-strong"
                                width={150}
                                height={150}
                            />
                        </div>
                        <h5 className="mb-3">Lisa Cudrow</h5>
                        <h6 className="text-primary mb-3">Graphic Designer</h6>
                        <p className="px-xl-3">
                            <i className="fas fa-quote-left pe-2" />
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                            suscipit laboriosam, nisi ut aliquid commodi.
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center mb-0">
                            <li>
                                <i className="fas fa-star fa-sm text-warning" />
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning" />
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning" />
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning" />
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                className="rounded-circle shadow-1-strong"
                                width={150}
                                height={150}
                            />
                        </div>
                        <h5 className="mb-3">John Smith</h5>
                        <h6 className="text-primary mb-3">Marketing Specialist</h6>
                        <p className="px-xl-3">
                            <i className="fas fa-quote-left pe-2" />
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti.
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center mb-0">
                            <li>
                                <i className="fas fa-star fa-sm text-warning" />
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning" />
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning" />
                            </li>
                            <li>
                                <i className="fas fa-star fa-sm text-warning" />
                            </li>
                            <li>
                                <i className="far fa-star fa-sm text-warning" />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>


    );
};

export default Home;
