import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageUser.scss';
import { AiOutlinePlusCircle } from "react-icons/ai";

const ModalCreateUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      {/* backdrop="static" đùng để chặn out modal khi nhấn bên ngoài*/}
      <Modal show={show} 
      onHide={handleClose} 
      size='xl' 
      backdrop="static"
      className='modal-add-user' 
       > 
        <Modal.Header closeButton>
          <Modal.Title>Add new User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="row g-3">
            <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
            </div>
            <div className="col-md-6">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" />
            </div>
            <div className="col-md-6">
                <label  className="form-label">Username</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
                <label  className="form-label">ROW</label>
                <select className="form-select">
                <option selected value="USER" >USER</option>
                <option value="ADMIN">ADMIN</option>
                </select>
            </div>
            <div className='col-md-12' >
                <label 
                  className='form-label label-upload'
                  htmlFor='labelUpload'
                  >
                    <AiOutlinePlusCircle /> Upload File Image</label>
                <input type='file' hidden id='labelUpload'></input>   {/*hidden ẩn nút button */}
            </div>
            <div className='col-md-12 img-preview' >
                {/* <span>Preview Image</span> */}
                <img src='https://cdn.9pay.vn/tin-tuc/blobid1698726897012-1698726914.png'></img>

            </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalCreateUser

