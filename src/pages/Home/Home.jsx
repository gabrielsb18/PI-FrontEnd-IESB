import { useAuth } from "../../contexts/AuthContext.jsx";

import AddTask from "../../components/AddTask/AddTask";
import { HeaderNav } from "../../components/Header/Header";
import { SelectButton } from "../../components/Select/Select";
import { ToastPopUp } from "../../components/Toast/Toast.jsx";
import { SearchNotes } from "../../components/SearchNotes/SearchNotes.jsx";
import { CardTaskModal } from "../../components/Modal/CardTaskModal.jsx";
import { Metrics } from "../../components/Metrics/index.jsx";

import {
	ContainerBody,
	Main,
	HeaderTitle,
	HeaderTasks,
    ActionsButtons,
	ContainerTitle,
	ContainerCardsTasks,
    ContainerTasks,
    BackgroundModal,
	NoContent,
} from "./Home.style";

import { useNotes } from "../../hooks/useNotes.js";
import { useModal } from "../../hooks/useModal.js";
import { TaskList } from "../../components/TasksList/TasksList.jsx";

export default function Home() {
    const { nome } = useAuth();
	const {
		notes,
		handleSearch,
		updateNote,
		deleteNote,
		filter,
		setFilter,
		isSearching,
		loading,
	} = useNotes();

	const { 
		closeModal,
		openModal,
		setModalOpen,
		modalOpen,
		currentNote,
		setCurrentNote
	} = useModal();

	return (
		<ContainerBody>
			<HeaderNav onSearch={handleSearch} />
			{isSearching ? (
				<SearchNotes
					updateNote={updateNote}
					deleteNote={deleteNote}
					notes={notes}
					modalOpen={modalOpen}
					currentNote={currentNote}
					setModalOpen={setModalOpen}
					setCurrentNote={setCurrentNote}
				/>
			) : (
				<Main>
					<HeaderTitle>
						<h1>
							Olá <strong>{nome}</strong> 👋
						</h1>
						<p>Adicione uma nova tarefa</p>
					</HeaderTitle>
					<Metrics />
					<HeaderTasks>
						<ContainerTitle>
							<h1>Suas Tarefas</h1>
							<ActionsButtons>
								<AddTask />
								<SelectButton
									filter={filter}
									setFilter={setFilter}
								/>
							</ActionsButtons>
						</ContainerTitle>
					</HeaderTasks>

					<ContainerTasks>
						<TaskList
							handleCardClick={openModal}
							loading={loading}
							notes={notes}
						/>
						{currentNote && modalOpen && (
							<>
								<BackgroundModal onClick={closeModal} />
								<CardTaskModal
									onUpdate={updateNote}
									onDelete={deleteNote}
									noteId={currentNote._id}
									isOpen={modalOpen}
									onClose={closeModal}
									key={currentNote._id}
									title={currentNote.titulo}
									content={currentNote.descricao}
								/>
							</>
						)}
					</ContainerTasks>
				</Main>
			)}
			<ToastPopUp />
		</ContainerBody>
	);
}
