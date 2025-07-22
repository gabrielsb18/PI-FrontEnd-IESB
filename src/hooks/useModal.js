import { useState } from "react";

export function useModal() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentNote, setCurrentNote] = useState(null);

    const openModal = (note) => {
        setCurrentNote(note);
        setModalOpen(true);
    }

    const closeModal = () => {
        setCurrentNote(null);
        setModalOpen(false);
    }

    return {
        modalOpen,
        setModalOpen,
        currentNote,
        setCurrentNote,
        openModal,
        closeModal
    }
}