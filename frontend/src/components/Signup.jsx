import React from 'react'
import { useFormik } from 'formik'
import { Navigate, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .required('name is required')
    .min(3, 'Name must be 3 charachters')
    .max(15, 'Name must be 15 charachters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(15, 'Password must be at most 15 characters')
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'Password must be alphanumeric with at least one special character'),
  mobileNumber: Yup.string()
    .required('Mobile number is required')
    .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
})


const Signup = () => {
  const navigate = useNavigate();
  const signUpFrom = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      level: '',
      mobileNumber: '',
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch('http://localhost:3000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()

      if (res.status)
        action.resetForm()
      if (res.status === 200) {
        enqueueSnackbar('Signup Successfull', { variant: 'success' })
        navigate('/Login');
      } else {
        enqueueSnackbar('Signup Failed', { variant: 'error' })
      }
    },
    validationSchema: SignUpSchema
  })
  return (
    <div style={{ backgroundColor: '#C0D6E8' }}>
      <section className="vh-20 p-5" >
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{color:'5f2986'}}>
                        Sign up
                      </p>
                      <form onSubmit={signUpFrom.handleSubmit} className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <label className="form-label" htmlFor="form3Example1c">
                              Your Name
                            </label>

                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              placeholder="Enter your Name"
                              onChange={signUpFrom.handleChange}
                              value={signUpFrom.values.name}
                            />

                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <label className="form-label" htmlFor="form3Example3c">
                              Your Email
                            </label>
                            <span style={{ color: 'red', fontSize: '10', marginLeft: 10 }}>{signUpFrom.touched.email && signUpFrom.errors.email}</span>

                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              placeholder="Enter your Email"
                              onChange={signUpFrom.handleChange}
                              value={signUpFrom.values.email}
                            />

                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <label className="form-label" htmlFor="form3Example4c">
                              Mobile Number
                            </label>
                            <span style={{ color: 'red', fontSize: '10', marginLeft: 10 }}>{signUpFrom.touched.mobileNumber && signUpFrom.errors.mobileNumber}</span>

                            <input
                              type="tel"
                              id="mobileNumber"
                              className="form-control"
                              pattern="[0-9]{10}"
                              placeholder="Enter your mobile number"
                              onChange={signUpFrom.handleChange}
                              value={signUpFrom.values.mobileNumber}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4 ml-5 ">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0 mr-5">
                            <label className="form-label" htmlFor="form3Example4c">
                              Select Your Level:  
                            </label>
                            <select name="level" >
                              <option value="Beginner">Beginner</option>
                              <option value="Expert">Expert</option>
                              <option value="Medium">Medium</option>
                              <option value="New Recruit">New Recruit</option>
                              <option value="Trainee">Trainee</option>
                              onChange={signUpFrom.handleChange}
                              value={signUpFrom.values.level}
                            </select>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <label className="form-label" htmlFor="form3Example4cd">
                              Password
                            </label>
                            <span style={{ color: 'red', fontSize: '10', marginLeft: 10 }}>{signUpFrom.touched.password && signUpFrom.errors.password}</span>

                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              placeholder="Enter your Password"
                              onChange={signUpFrom.handleChange}
                              value={signUpFrom.values.password}
                            />
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3c"
                          />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/003/689/230/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-5 flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 " style={{backgroundColor:'#75a8d1',width:'100%'}}>

          <div className="text-white mb-3 mb-md-0">
            Copyright © 2024. All rights reserved.
          </div>

          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter" />
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google" />
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          {/* Right */}
        </div>
      </section>
    </div>
  )
}

export default Signup