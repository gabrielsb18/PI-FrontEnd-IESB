import { useEffect, useState } from "react";
import {ModalTask, ContainerModal, TitleTask, ContentTask, ButtonTrash, ButtonCloseNote, ContainerButtons, ActionsButtons, ButtonChecked } from "./CardTaskModal.style.js";
import { toast } from "sonner";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { deleteNote, putNote } from "../../services/notesService.js";

export function CardTaskModal ({title:initialTitle, content:initialContent, noteId, onClose, isOpen, onUpdate, onDelete}) {
    const { userId } = useAuth();

    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);
    const [status, setStatus] = useState('pendente');
  
    async function handleRemove() {
		try {
			const response = await deleteNote(noteId);
            
            if(response.sucess){
                toast.success("Nota deletada com sucesso", {
                    style: {
                        borderColor: "green",
                    },
                });
                
                onDelete(noteId);
                onClose();
            }

            
            if(!response.sucess){
                toast.error(response.msg);
            }

		} catch (error) {
			toast.error(error.message);
		}
	}

    async function handleUpdate() {
		if (title === initialTitle && content === initialContent) {
			onClose();
			return;
		}

		try {
			const updatedNote = {
				_id: noteId,
				titulo: title,
				descricao: content,
				status: status,
				usuario: userId,
			};

			const response = await putNote(noteId, updatedNote);

            if(!response.sucess){
                toast.error(response.msg);
            }

            if(response.sucess){
                onUpdate(updatedNote);
                onClose();

                toast.success(response.data.msg, {
                    style: {
                        borderColor: "green",
                    },
                });
            }

		} catch (error) {
			toast.error(error.message);
		}
	}

    async function handleComplete() {
		try {
			const updatedNote = {
				_id: noteId,
				titulo: title,
				descricao: content,
				status: "concluida",
				usuario: userId,
			};

			const response = await putNote(noteId, updatedNote);

            if(!response.sucess){
                toast.error(response.msg);
            }

            if(response.sucess){
                toast.success(response.data.msg, {
                    style: {
                        borderColor: "green",
                    },
                });
			    onUpdate(updatedNote);
                setStatus("concluída");
                onClose();
            }

		} catch (error) {
			toast.error(error.message);
		}
	}
    
    useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

    if(!isOpen) return null;

    return(
        <ContainerModal>
            <ModalTask onClick={e => e.stopPropagation()}>
                <TitleTask
                    maxRows={6}
                    placeholder="Titulo"
                    value={title}
                    onChange={(e)=> {setTitle(e.target.value);}}
                />
                <ContentTask
                    minRows={3}
                    maxRows={20}
                    placeholder="Conteudo"
                    value={content}
                    onChange={(e)=> {setContent(e.target.value);}}
                />
            </ModalTask>
            <ContainerButtons>
                <ActionsButtons>
                    <ButtonTrash onClick={handleRemove}>
                        <img src="/trash-icon.svg" alt="Excluir anotação"/>
                    </ButtonTrash>
                    <ButtonChecked onClick={handleComplete}>
                        <img src="/check-icon.svg" alt="Salvar anotação"/>
                    </ButtonChecked>
                </ActionsButtons>
                    <ButtonCloseNote
                        onClick={handleUpdate}>
                            Fechar
                    </ButtonCloseNote>
            </ContainerButtons>
        </ContainerModal>
    )
}