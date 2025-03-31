import {faXmark, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import React, {useContext, useEffect} from "react";
import {ModalContext} from "../lib/context/ModalContext.tsx";
import {AnimatePresence, motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export type Modal = {
    title: string;
    icon?: IconDefinition;
    children: React.ReactNode;
}

export const ModalComponent = function () {

    const {modal, setModal} = useContext(ModalContext);
    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                setModal(undefined);
            }
        });
    }, [setModal]);

    return (
        <AnimatePresence mode={"wait"}>
            {modal && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2, ease: "easeInOut"}}
                    className={"fixed top-0 left-0 bg-black bg-opacity-40 backdrop-blur h-full w-full flex items-center justify-center z-20"}>

                    <div
                        className={"flex min-w-[900px] flex-col rounded-xl relative p-8"}>
                        <button className={'absolute top-3 right-3 text-xl font-medium hover:text-red-500 hover:scale-125'}
                                onClick={() => setModal(undefined)}><FontAwesomeIcon
                            icon={faXmark}/></button>
                        <div className={"flex items-center gap-2"}>
                            {modal.icon && <FontAwesomeIcon icon={modal.icon}/>}
                            <span className={'font medium text-2xl'}>{modal.title}</span>
                        </div>
                        {modal.children}
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}