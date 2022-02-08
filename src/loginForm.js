import React, { useState, useEffect } from 'react';
import './App.css';
const LoginForm = () => {
    const [login, setLogin] = React.useState(''); 
    const [password, setPassword] = React.useState('');
    function submitBtnLogin (){
      
        let submitBtnLogin = document.getElementById('submitBtnLogin');
        submitBtnLogin.addEventListener('click', e =>{
            
            
        })
    }
  return (
    <div className="container">
          <div className='row justify-content-center align-items-center pt-lg-5 mt-lg-5'>
              <h1>Librery project width react js and javascript</h1>
                <div className='col-md-5 ml-3 text-right mt-5 pt-5  forms-login shadow-sm rounded'>
                <h2 className = 'text-center mb-4 pb-4'>sign In</h2>
                  <form id="contact-form" name="contact-form" >
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name"  onChange = { (e) => login = e.target.value} className="form-control"/>
                            <label htmlFor="name" className="" value = ""  >user name</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="password" id="subject" name="subject" onChange = { (e) => password = e.target.value} className="form-control"/>
                            <label htmlFor="subject" className=""> password</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form" id='remmberme'>
                                <div className="md-form">
                                    <input id='submitBtnLogin' onClick = {submitBtnLogin} className="submit-btn" type="button" value="Login" />
                                </div>
                        </div>
                    </div>
                </div>
            </form>
                </div>
                <div className='col-md-5 text-right mt-5 pt-5 forms-login shadow-sm rounded'>
                <h2 className = 'text-center mb-4 pb-4'>sign up</h2>
                  <form id="contact-form" name="contact-form" >
                <div className="row">
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="email" id="name" name="name" className="form-control"/>
                            <label htmlFor="name" className="">email</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control"/>
                            <label htmlFor="name" className="">user name</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                        <input type="password" id="subject" name="confirm_password" className="form-control" id="confirm_password"/>
                            <label htmlFor="password" className=""> confirm password</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="password" id="subject" name="subject" className="form-control"/>
                            <label htmlFor ="password" className=""> password</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form" id='remmberme'>
                        <div className="md-form">
                              <input id='submitBtnSignUp' className="submit-btn" type="submit" value="sign up" />
                        </div>
                        </div>
                    </div>

                </div>
            </form>
                </div>
          </div>
    </div>
  );
}

export default LoginForm;
