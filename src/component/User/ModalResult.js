import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalResult = (props) =>{
    const { show , setShow, dataModalResult } = props;
    const handleClose = () => setShow(false);
    return (
        <>
            <Modal
                show = {show}
                onHide = {handleClose}
                backdrop = "static"
            >
                <div class="modal-header">
                    <Modal.Title>Your Result ...</Modal.Title>
                </div>
                <Modal.Body >
                    <div>Total Question: <b>{dataModalResult.countTotal}</b></div>
                    <div>Total Correct answers : <b>{dataModalResult.countCorrect}</b></div>
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" class="btn btn-secondary" onClick={handleClose}>Show answers</button>
                    <button variant="primary" class="btn btn-primary" onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalResult