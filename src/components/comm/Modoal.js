import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
// import CloseButton from './CloseButton'

function Modal({ className, onClose, maskClosable, closable, visible, children, }) {

    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e)
        }
    }

    // const close = (e) => {
    //     if (onClose) {
    //         onClose(e)
    //     }
    // }
    return (
        <>
            <ModalOverlay visible={visible} />
            <ModalWrapper
                className={className}
                onClick={maskClosable ? onMaskClick : null}
                tabIndex="-1"
                visible={visible}
            >
                <ModalInner tabIndex="0" className="modal-inner">
                    {/* {closable && <CloseButton className="modal-close" onClick={close} />} */}
                    {children}
                </ModalInner>
            </ModalWrapper>
        </>
    )
}

Modal.propTypes = {
    visible: PropTypes.bool,
}

export default Modal

const ModalWrapper = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  ${({ theme }) => theme.common.Overlay};
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`