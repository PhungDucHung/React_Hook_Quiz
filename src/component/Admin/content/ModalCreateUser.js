import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageUser.scss';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { toast } from 'react-toastify';
import { postCreateNewUser } from '../../../services/apiService';



const ModalCreateUser = (props) => {
  const {show ,setShow} = props;
  const handleClose = () =>{
    setShow(false)
    // thiết lập khi tắt modal các phần tử nhập sẽ reset
    setEmail("");
    setPassword("");
    setUsername("");
    setImage("");
    setRole("");
    setPreviewImage("");
  } 


  const [email, setEmail] = useState("");
  const [password, setPassword ] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [role , setRole] = useState("USER");
  const [previewImage, setPreviewImage] = useState("");

  const handleUploadImage = (event) => {
    if(event.target && event.target.files && event.target.files[0]){
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
    else{
      setPreviewImage("");
    }
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handSubmitCreateUser = async() => {
    //---------------- copy code trên trang github axio
    // validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.warning('invalid email')
      return;
    }
    if (!password) {
      toast.warning('invalid password')
      return;
    }

      let data = await  postCreateNewUser(email, password ,username ,role ,image)
      // console.log("check res", res.data);
      if(data && data.EC === 0){
        toast.success('Add Success')
        handleClose();
      }
      if(data && data.EC !== 0){
        toast.error('Invalid');
      }


  }
    //-------------------------------------------------
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
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
                <input type="email" className="form-control" value={email} onChange={(event)=>setEmail(event.target.value)} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={(event)=>setPassword(event.target.value)} />
            </div>
            <div className="col-md-6">
                <label  className="form-label">Username</label>
                <input type="text" className="form-control" value={username} onChange={(event)=>setUsername(event.target.value)}/>
            </div>
            <div className="col-md-4">
                <label  className="form-label">ROW</label>
                <select className="form-select" onChange={(event)=>setRole(event.target.value)}>
                  <option value="USER" >USER</option>
                  <option value="ADMIN">ADMIN</option>
                </select>
            </div>
            <div className='col-md-12' >
                <label 
                  className='form-label label-upload'
                  htmlFor='labelUpload'
                  >
                    <AiOutlinePlusCircle /> Upload File Image</label>
                <input type='file' hidden id='labelUpload' onChange={(event) => handleUploadImage(event)}></input>   {/*hidden ẩn nút button */}
            </div>

            <div className='col-md-12 img-preview' >
                {
                  previewImage ?
                    <img src={previewImage}></img>
                    :
                    <span>Preview Image</span>
                }

            </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handSubmitCreateUser()}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalCreateUser