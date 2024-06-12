import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser"
import { AiOutlinePlusCircle } from "react-icons/ai";
import TableUser from "./TableUser";


const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={()=> setShowModalCreateUser(true) }><AiOutlinePlusCircle />Add new users</button>
                </div>
                <div className="table-user-container">
                    <TableUser></TableUser>
                </div>
                <ModalCreateUser 
                    show={showModalCreateUser} 
                    setShow={setShowModalCreateUser}>
                </ModalCreateUser>
            </div>
            
        </div>
    )
}
export default ManageUser