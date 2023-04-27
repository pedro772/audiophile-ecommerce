import { useState } from "react";

export function useModal() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<any>();

  const handleModal = (content: any = false) => {
    if (content) {
      if (
        content.type === (modalContent && modalContent.type) ||
        modalContent === undefined ||
        !showModal
      ) {
        setShowModal((prevShowModal) => !prevShowModal);
      }

      setModalContent(content);
    } else {
      setShowModal(false);
    }
  };

  return { showModal, handleModal, modalContent };
}
