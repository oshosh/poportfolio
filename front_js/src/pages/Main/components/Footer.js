import React, { forwardRef, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import dotenv from 'dotenv';
import emailjs from 'emailjs-com';

import Portal from '../../../components/comm/Portal';
import Loader from '../../../components/comm/Loader';

import { FormContent } from './FormContent';
dotenv.config();
function Footer({ footerForwardRef }) {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;

  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      address: '',
      detail: '',
      message: '',
    },
  });

  const [loading, setLoading] = useState(null);

  const handleSubmitClick = useCallback(
    (e) => {
      setLoading(true);
      emailjs.send(SERVICE_ID, TEMPLATE_ID, form.getValues(), USER_ID).then(
        (result) => {
          if (result.text === 'OK') {
            setLoading(false);
            alert('감사합니다 : )\n빠른시일안에 답변드리겠습니다!');
          }
        },
        (error) => {
          console.error(error);
          alert('메세지 전송에 실패하였습니다.');
        }
      );
    },
    [SERVICE_ID, TEMPLATE_ID, USER_ID, form.getValues]
  );

  return (
    <>
      <FooterWrapper id='footer' ref={footerForwardRef}>
        <FormProvider {...form}>
          <FooterTop>
            <h2>
              <span>
                <b>CONTACT</b> ME
              </span>
            </h2>
            <form onSubmit={form.handleSubmit(handleSubmitClick)}>
              <FormContent />
              <SubmitButton type='submit' className='submit-btn'>
                SEND MESSAGE
              </SubmitButton>
            </form>
          </FooterTop>
        </FormProvider>
        <FooterBottom>
          <small>&copy; 2021 by OH SEHYUN. All rights reserved.</small>
        </FooterBottom>
      </FooterWrapper>
      {loading && (
        <>
          <Portal elementId={'#loading'}>
            <Loader type='spokes' color='black' message={'데이터 처리중 입니다.'} />
          </Portal>
        </>
      )}
    </>
  );
}
Footer.prototype = {
  footerForwardRef: PropTypes.shape({ component: PropTypes.instanceOf(React.Component) }),
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

  &::before {
    content: '';
    width: 120%;
    position: absolute;
    top: -72px;
    background: #f2f2f2;
    transform: rotate(3deg);
    height: 150px;
    display: block;
  }
`;
const FooterTop = styled.div`
  & h2 {
    color: #fff;
    font-weight: 400;
    display: inline-block;
    margin: 50px 0;
    font-size: 2.2rem;

    & span {
      display: inline-block;

      &::after {
        ${({ theme }) => theme.common.InlineBlockSpanUnderLine};
      }
    }
  }
`;

const FooterBottom = styled.div`
  color: #bebebe;
  text-align: center;
  margin-top: 100px;
  padding-bottom: 50px;
  line-height: 1.3;

  & small {
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
`;
