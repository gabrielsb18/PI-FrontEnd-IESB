import { useEffect, useState } from "react";
import { getNotes, searchNotes } from "../services/notesService";
import { useDebounce } from "./useDebounce";
import { toast } from "sonner";

export function useNotes() {

    const [notes, setNotes] = useState([]);
    const [filter, setFilter] = useState("todas");
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [loading, setLoading] = useState(false)

    const debouncedSearch = useDebounce(searchTerm, 500);

    const fetchNotes = async (searchTerm = "") => {
        setLoading(true)
        try {
            if (searchTerm.trim() !== "") {
                const response = await searchNotes(searchTerm);

                if (!response.sucess) {
                    toast.error(response.msg);
                }

                if (response.sucess) {
                    setNotes(response.data);
                }

            } else {
                const response = await getNotes();

                if (!response.sucess) {
                    toast.error(response.msg);
                }

                if (response.sucess) {
                    setNotes(response.data);
                }

            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchNotes(debouncedSearch);
    }, [debouncedSearch]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        setIsSearching(term.trim() !== "");
    };

    const applyFilter = () => {
        if (filter === "todas") {
            return notes;
        }
        return notes.filter((note) => note.status === filter);
    };

    const updateNote = (updateNote) => {
        setNotes((prevNotes) =>
            prevNotes.map((note) =>
                note._id === updateNote._id ? updateNote : note
            )
        )
    };

    const deleteNote = (noteId) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId));
    };

    return {
        notes: applyFilter(),
        handleSearch,
        updateNote,
        deleteNote,
        filter,
        setFilter,
        searchTerm,
        isSearching,
        loading
    }
}