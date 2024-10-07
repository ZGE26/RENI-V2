import React, { useState } from 'react';

const CustomAlert = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button onClick={handleShow}>Show Alert</button>
            {show && <div>Alert is showing</div>}
            <button onClick={handleClose}>Close Alert</button>
        </div>
    );
};

export default CustomAlert;
