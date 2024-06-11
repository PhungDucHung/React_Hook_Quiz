import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ManageUser.scss';
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from 'axios';

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
  const [Username, setUsername] = useState("");
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

  const handSubmitCreateUser = async() => {
    //  let data = {
    //   email: email,
    //   password: password,
    //   username: Username,
    //   role: role,
    //   userImage: image,
    //  }
    //  console.log(data);

    //---------------- copy code trên trang github axio
     const data = new FormData();
      data.append('email', email);
      data.append('password', password);
      data.append('username', Username);
      data.append('role', role);
      data.append('userImage', image);
      
      let res = await axios.post('http://localhost:8081/api/v1/participant', data)
      console.log("check res", res);
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
                <input type="text" className="form-control" value={Username} onChange={(event)=>setUsername(event.target.value)}/>
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