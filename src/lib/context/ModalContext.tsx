import React, { createContext, useState, ReactNode } from "react";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

export type ModalContextInterface = {
    modal: Modal | undefined;
    setModal: (value: Modal | undefined) => void;
};

export type Modal = {
    title: string;
    icon?: IconDefinition;
    children: React.ReactNode;
};

export const ModalContext = createContext<ModalContextInterface>({
    modal: undefined,
    setModal: () => {},
});

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [modal, setModal] = useState<Modal | undefined>(undefined);

    return (
        <ModalContext.Provider value={{ modal, setModal }}>
            {children}
        </ModalContext.Provider>
    );
};
