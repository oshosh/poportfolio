import ReactDOM from 'react-dom';

export default function Portal({ children, elementId }) {
    const element = document.querySelector(elementId)

    return (
        ReactDOM.createPortal(children, element)
    );
}


