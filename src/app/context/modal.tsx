"use client";

import { createContext, useContext, useState } from "react";
import { useModal } from "../hooks/useModal";
import Modal from "../components/Modals/Modal";

interface ModalContextProps {
  showModal: boolean;
  handleModal: (_: any) => void;
  modalContent: any;
}

const defaultValue = {
  showModal: false,
  handleModal: () => {},
  modalContent: "",
};

const ModalContext = createContext<ModalContextProps>(defaultValue);

export const ModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { showModal, handleModal, modalContent } = useModal();

  return (
    <ModalContext.Provider value={{ showModal, handleModal, modalContent }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
