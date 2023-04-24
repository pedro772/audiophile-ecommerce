import { useState } from "react";

export function useModal() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const handleModal = (content: any = false) => {
    if (content) {
      setShowModal((prevShowModal) => !prevShowModal);
      setModalContent(content);
    } else {
      setShowModal(false);
    }
  };

  return { showModal, handleModal, modalContent };
}
