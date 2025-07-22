import { ContainerCardsTasks, NoContent } from "../../pages/Home/Home.style";
import { CardTask } from "../CardTasks/CardTasks";
import { SkeletonCards } from "../Skeletons/SkeletonCards/SkeletonCards";

function TaskList({ loading, notes, handleCardClick }) {
	return (
		<ContainerCardsTasks>
			{loading ? (
				<SkeletonCards count={20} />
			) : (
				notes.map((note) => (
					<CardTask
						key={note._id}
						title={note.titulo}
						description={note.descricao}
						status={note.status}
						onClick={() => handleCardClick(note)}
					/>
				))
			)}

			{notes.length === 0 && (
				<NoContent>
					<img src="/NoContent.png" alt="Nenhuma tarefa encontrada" />
					<h2>Adicione uma tarefa nova</h2>
				</NoContent>
			)}
		</ContainerCardsTasks>
	);
}

export { TaskList };
