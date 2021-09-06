import React, { forwardRef, useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Controller, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message'

import dotenv from "dotenv";
import emailjs from 'emailjs-com';
import DaumPostcode from 'react-daum-postcode';

import { postCodeStyle } from '../util/commFunction';
import Modal from '../commComponents/Modoal';
import Loader from '../commComponents/Loader';

//https://stackoverflow.com/questions/62040275/how-can-i-access-a-state-hook-value-from-a-callback-passed-to-a-listener
// 나중에 리사이징 참고
dotenv.config();
function Footer({ forwardRef3 }) {
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    const { register, handleSubmit, watch, formState: { errors }, setValue, control } = useForm();

    const [isAddress, setIsAddress] = useState("");
    const [isZoneCode, setIsZoneCode] = useState();
    const [isPostOpen, setIsPostOpen] = useState(false)

    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(null);

    const addressControlRef = useRef()

    const onSubmitSend = useCallback((e) => {
        setLoading(true)
        emailjs.send(SERVICE_ID, TEMPLATE_ID, watch(), USER_ID)
            .then((result) => {
                if (result.text === 'OK') {
                    setLoading(false)
                    alert('감사합니다 : )\n빠른시일안에 답변드리겠습니다!')
                }
            }, (error) => {
                console.error(error);
                alert('메세지 전송에 실패하였습니다.')
            });

    }, [SERVICE_ID, TEMPLATE_ID, USER_ID, watch])

    const openModal = useCallback((e) => setModalVisible(true), [])
    const closeModal = useCallback((e) => setModalVisible(false), [])

    const eventAction = useCallback((e, action) => {
        switch (e.target.name) {
            case 'address':
                openModal()
                setIsPostOpen(true)
                break;
            default:
                break;
        }
    }, [openModal])

    const onInputClick = useCallback((e) => eventAction(e, 'onInputClick'), [eventAction])
    const onInputFocus = useCallback((e) => eventAction(e, 'onInputFocus'), [eventAction])

    // 다음 API 이벤트
    const handleComplete = useCallback((data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        setIsZoneCode(data.zonecode);
        setIsAddress(fullAddress);

        //제어 컴포넌트
        setValue("address", addressControlRef.current.value)

        //입력 후 모달 닫기
        closeModal()
        setIsPostOpen(false);
    }, [closeModal, setValue]);

    return (
        <>
            <FooterWrapper id='footer' ref={forwardRef3}>
                <FooterTop>
                    <h2><span><b>CONTACT</b> ME</span></h2>
                    <form onSubmit={handleSubmit(onSubmitSend)}>
                        <FormWrapper className="form-wrap">
                            <fieldset className="form-group">
                                <label>Name :</label>
                                <input
                                    type='text'
                                    name='name'
                                    {...register("name", { required: "필수 입력 사항입니다.", maxLength: 50 })}
                                    placeholder="이름 / 회사명을 입력해주세요."
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="name"
                                    render={({ message }) => <RequiredText>{message}</RequiredText>}
                                />
                            </fieldset>

                            <fieldset className="form-group">
                                <label htmlFor="email"><em>Your</em> Email Address :</label>
                                <input
                                    id="email"
                                    className="email"
                                    name="email"
                                    type="email"
                                    {...register("email", { required: true, maxLength: 50 })}
                                    placeholder="이메일을 입력해주세요."
                                />
                                <span className="email-warning">* 이메일 형식에 맞게 입력해주세요.</span>
                            </fieldset>

                            <fieldset className="form-group">
                                <label>Adress :</label>
                                <Controller
                                    control={control}
                                    name="address"
                                    render={({ onChange, onBlur, value }) => (
                                        <input
                                            name="address"
                                            onClick={onInputClick}
                                            onFocus={onInputFocus}
                                            // onFocus
                                            ref={addressControlRef}
                                            value={isAddress}
                                            onChange={e => {
                                                setValue("address", isAddress)
                                            }}
                                            placeholder="주소를 입력해주세요."

                                        />
                                    )}
                                    {...register("address", { required: "필수 입력 사항입니다." })}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="address"
                                    render={({ message }) => {
                                        return (
                                            <RequiredText>{message}</RequiredText>
                                        )
                                    }}
                                />
                            </fieldset>

                            <fieldset className="form-group">
                                <label htmlFor="email">Detail Address :</label>
                                <input
                                    id="detail"
                                    className="detail"
                                    name="detail"
                                    type="detail"
                                    {...register("detail", { required: true, maxLength: 50 })}
                                    placeholder="상세 주소를 입력해주세요."
                                />

                            </fieldset>

                            <fieldset className="form-group">
                                <label htmlFor="message">Message: </label>
                                <textarea
                                    id="message"
                                    className="message"
                                    name="message"
                                    rows="10"
                                    placeholder="메세지를 입력해주세요."
                                    {...register("message", { required: true })}
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

            {
                modalVisible && <Modal
                    visible={modalVisible}
                    closable={true}
                    maskClosable={true}
                    onClose={closeModal}>
                    {
                        isPostOpen
                            ? (
                                <DaumPostcode
                                    style={postCodeStyle}
                                    onComplete={handleComplete}
                                />
                            ) : null
                    }
                </Modal>
            }

            {
                loading && <Loader type="spokes" color="black" message={'데이터 처리중 입니다.'} />
            }
        </>
    );
}
Footer.prototype = {
    forwardRef3: PropTypes.shape({ component: PropTypes.instanceOf(React.Component) }),
};

export default forwardRef(Footer);

const FooterWrapper = styled.footer`
    display: block;
    position: relative;
    padding: 100px 0 0;
    box-sizing: border-box;
    color: #fff;
    background: ${({ theme }) => theme.colors.darkPurple};
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

            &::after{
                ${({ theme }) => theme.common.InlineBlockSpanUnderLine};
            }
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

        &:nth-child(5){
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

    @media ${({ theme }) => theme.device.mobile} {
        width: 85%;
    }
`
const FooterBottom = styled.div`
    color: #bebebe;
    text-align: center;
    margin-top: 100px;
    padding-bottom: 50px;
    line-height: 1.3;

    & small{
        font-size: 80%;
    }

`;

const SubmitButton = styled.button`
    margin-top: 20px;
    padding: 15px 35px;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.darkPurple};
    cursor: pointer;
`

const RequiredText = styled.p`
    font-size: 0.9rem;
    margin-top: 1px;
    color: #bf1650;

     &::before {
        content: "⚠ ";
        display: inline;
     }
`;