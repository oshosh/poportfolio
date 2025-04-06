import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { useCallback, useState, useRef } from 'react';
import DaumPostcode from 'react-daum-postcode';

import Modal from '../../../components/comm/Modal';
import Portal from '../../../components/comm/Portal';
import { postCodeStyle } from '../../../util/lib/commFunction';
import { useContactMeFormInput } from '../hook/useContactMeFormInput';

export const FormContent = () => {
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const addressControlRef = useRef();
  const {
    nameField: { value: name, onChange: nameOnChange, error: nameError },
    emailField: { value: email, onChange: emailOnChange, error: emailError },
    addressField: {
      control: addressControl,
      value: address,
      onChange: addressOnChange,
      error: addressError,
    },
    detailField: { value: detail, onChange: detailOnChange, error: detailError },
    messageField: { value: message, onChange: messageOnChange, error: messageError },
  } = useContactMeFormInput();

  const handleComplete = useCallback(
    (data) => {
      let fullAddress = data.address;
      let extraAddress = '';

      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }

      addressOnChange(fullAddress);

      //입력 후 모달 닫기
      closeModal();
      setIsPostOpen(false);
    },
    [closeModal, addressOnChange]
  );

  const eventAction = useCallback(
    (e, action) => {
      switch (e.target.name) {
        case 'address':
          openModal();
          setIsPostOpen(true);
          break;
        default:
          break;
      }
    },
    [openModal]
  );

  const handleAddressClick = useCallback(
    (e) => eventAction(e, 'handleAddressClick'),
    [eventAction]
  );
  const handleAddressFocus = useCallback(
    (e) => eventAction(e, 'handleAddressFocus'),
    [eventAction]
  );

  const openModal = useCallback((e) => setModalVisible(true), []);
  const closeModal = useCallback((e) => setModalVisible(false), []);

  return (
    <>
      <FormWrapper className='form-wrap'>
        <fieldset className='form-group'>
          <label>Name :</label>
          <input
            type='text'
            name='name'
            placeholder='이름 / 회사명을 입력해주세요.'
            value={name}
            onChange={nameOnChange}
          />
          {nameError && <RequiredText>{nameError.message}</RequiredText>}
        </fieldset>

        <fieldset className='form-group'>
          <label htmlFor='email'>
            <em>Your</em> Email Address :
          </label>
          <input
            id='email'
            className='email'
            name='email'
            type='email'
            value={email}
            onChange={emailOnChange}
            placeholder='이메일을 입력해주세요.'
          />
          {emailError && <RequiredText>{emailError.message}</RequiredText>}
        </fieldset>

        <fieldset className='form-group'>
          <label htmlFor='address'>Adress :</label>
          <Controller
            control={addressControl}
            name='address'
            render={({ onChange, onBlur, value }) => (
              <input
                id='address'
                name='address'
                onClick={handleAddressClick}
                onFocus={handleAddressFocus}
                ref={addressControlRef}
                placeholder='주소를 입력해주세요.'
                value={address}
                onChange={addressOnChange}
              />
            )}
          />
          {addressError && <RequiredText>{addressError.message}</RequiredText>}
        </fieldset>

        <fieldset className='form-group'>
          <label htmlFor='detail'>Detail Address :</label>
          <input
            id='detail'
            className='detail'
            name='detail'
            type='text'
            placeholder='상세 주소를 입력해주세요.'
            value={detail}
            onChange={detailOnChange}
          />
          {detailError && <RequiredText>{detailError.message}</RequiredText>}
        </fieldset>

        <fieldset className='form-group'>
          <label htmlFor='message'>Message: </label>
          <textarea
            id='message'
            className='message'
            name='message'
            rows='10'
            placeholder='메세지를 입력해주세요.'
            value={message}
            onChange={messageOnChange}
          ></textarea>
          {messageError && <RequiredText>{messageError.message}</RequiredText>}
        </fieldset>
      </FormWrapper>
      {modalVisible && (
        <>
          <Portal elementId={'#daumAddressModal'}>
            <Modal visible={modalVisible} closable={true} maskClosable={true} onClose={closeModal}>
              {isPostOpen ? (
                <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
              ) : null}
            </Modal>
          </Portal>
        </>
      )}
    </>
  );
};

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

    & label {
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

    &:nth-child(5) {
      width: 100%;

      & textarea {
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
`;
const RequiredText = styled.p`
  font-size: 0.9rem;
  margin-top: 1px;
  color: #bf1650;

  &::before {
    content: '⚠ ';
    display: inline;
  }
`;
