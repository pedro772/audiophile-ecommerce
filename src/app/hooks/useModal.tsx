import { useState } from "react";

export function useModal() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const handleModal = (content: any = false) => {
    setShowModal(!showModal);
    if (content) {
      setModalContent(content);
    }
  };

  return { showModal, handleModal, modalContent };
}
