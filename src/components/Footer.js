import React, { forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dotenv from "dotenv";
import emailjs from 'emailjs-com';

import useInput from '../util/useInput';
function Footer({ forwardRef3 }) {
    dotenv.config();
    const [name, onChangeName, setName] = useInput('')
    const [email, onChangeEmail, setEmail] = useInput('')
    const [textValue, onChangeTextValue, setTextValue] = useInput('')

    const onSubmitSend = useCallback((e) => {
        e.preventDefault();

        const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
        const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
        const USER_ID = process.env.REACT_APP_USER_ID

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {

                console.log('200')
                console.log(result.text);

                if (result.text === 'OK') {
                    alert('감사합니다 : )\n빠른시일안에 답변드리겠습니다!')
                }

            }, (error) => {
                console.error(error);
                alert('메세지에 실패하였습니다.')
            });
    }, [])
    return (
        <FooterWrapper id='footer' ref={forwardRef3}>
            <FooterTop>
                <h2><span>CONTACT ME</span></h2>
                <form onSubmit={onSubmitSend}>
                    <FormWrapper className="form-wrap">

                        <fieldset className="form-group">
                            <label>Name:</label>
                            <input
                                name='name'
                                value={name}
                                onChange={onChangeName}
                                placeholder="이름 / 회사명을 입력해주세요."
                            />
                        </fieldset>

                        <fieldset className="form-group">
                            <label htmlFor="email"><em>Your</em> Email Address:</label>
                            <input
                                id="email"
                                className="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={onChangeEmail}
                                required
                                placeholder="이메일을 입력해주세요."
                            />
                            <span className="email-warning"
                            >* 이메일 형식에 맞게 입력해주세요.</span
                            >
                        </fieldset>

                        <fieldset className="form-group">
                            <label htmlFor="message">Message: </label>
                            <textarea
                                id="message"
                                className="message"
                                name="message"
                                rows="10"
                                placeholder="메세지를 입력해주세요."
                                value={textValue}
                                onChange={onChangeTextValue}
                            ></textarea>
                        </fieldset>
                        <SubmitButton className='submit-btn'>SEND MESSAGE</SubmitButton>
                    </FormWrapper>
                </form>
            </FooterTop>
            <FooterBottom>
                <small>&copy; 2021 by OH SEHYUN. All rights reserved.</small>
            </FooterBottom>
        </FooterWrapper>
    );
}
Footer.prototype = {
    forwardRef3: PropTypes.shape({ component: PropTypes.instanceOf(React.Component) }),
};

export default forwardRef(Footer);

const SubmitButton = styled.button`
    margin-top: 20px;
    padding: 15px 35px;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 50px;
    background: #514862;
    cursor: pointer;
`

const FooterWrapper = styled.footer`
    display: block;
    position: relative;
    padding: 100px 0 0;
    box-sizing: border-box;
    color: #fff;
    background: #514862;
    overflow: hidden;

    text-align: center;
 
    &::before{
        content: '';
        width: 120%;
        position: absolute;
        top: -72px;
        background: #f2f2f2;
        transform: rotate(3deg) ;
        height: 150px;
        display: block;
    }
`;
const FooterTop = styled.div`

    & h2 {
        color: #fff;
        font-weight: 400;
        display: inline-block;
        margin: 50px 0 ;
        font-size: 2.2rem;
        
        & span {
            display: inline-block;
        }       
    }
`;

const FormWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    width: 46%;
    
    & fieldset {
        border: none;
        width: 47%;
        padding: 0;
        text-align: left;
        box-sizing: border-box;

        & label{
            display: block;
            width: 100%;
            margin-top: 20px;
        }
        
        & input {
            width: 100%;
            margin-top: 8px;
            padding: 15px 10px;
            border-radius: 5px;
            border: none;
            box-sizing: border-box;
            font-size: 0.8rem;
        }
        
        & .email-warning {
            font-size: 0.75rem;
            color: #fff69d;
        }

        &:nth-child(3){
            width: 100%;
            
            & textarea{
                border-radius: 5px;
                width: 100%;   
                margin-top: 8px; 
                padding: 15px 10px;
                box-sizing: border-box;
                border: none;
                font-size: 0.94rem;
                line-height: 1.3;
            }
        }
    }

    
`
const FooterBottom = styled.div`
    color: #bebebe;
    text-align: center;
    margin-top: 35px;
    padding-bottom: 50px;
    line-height: 1.3;

    & small{
        font-size: 80%;
    }

`;