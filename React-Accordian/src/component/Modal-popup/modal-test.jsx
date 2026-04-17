import { useState } from "react"
import ModalPop from "./index";

const ModalTest = () => {
    const [showModal,setShowModal] = useState(false);
    const handleToggleModal = ()=>{
        setShowModal(!showModal);
    }

    const closeModal = ()=>{
        setShowModal(false);
    }
  return (
    <div>
        <button onClick={handleToggleModal} className="p-3 rounded-2xl bg-amber-400 border-2">Open Modal Fastttt</button>
        {
            showModal && <ModalPop onClose={closeModal} />
        }
    </div>
  )
}

export default ModalTest