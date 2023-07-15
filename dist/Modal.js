import React from 'react';
import './Modal.css';

/**
 * @component
 * @param {Object} props - The component's props.
 * @param {ReactNode} props.children - The content to be displayed inside the modal.
 * @param {boolean} props.showModal - Flag indicating whether the modal should be displayed or not.
 * @param {Function} props.onClick - The function to be called when the modal or close button is clicked.
 * @returns {JSX.Element|null} The Modal component.
 */

const Modal = ({
  children,
  showModal,
  onClick
}) => {
  /*  check the close button or black screen click  */
  const handleClick = e => {
    if (e.target.className === 'close' || e.target.className === 'modal') {
      onClick();
    }
  };
  if (showModal) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: handleClick,
      className: "modal"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/React.createElement("span", {
      onClick: handleClick,
      className: "close"
    }, "\xD7"), children));
  } else {
    return null;
  }
};
export default Modal;