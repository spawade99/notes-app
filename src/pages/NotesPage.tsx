import React, { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import { Note } from '../types/types';

const NotesPage = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    useEffect(() => {
        init();
    }, []);

    async function init() {
        const color = { id: "1", colorHeader: "lightgreen", colorBody: "lightgrey", colorText: "black" };
        const position = { x: 100, y: 200 };
        const notes: Note[] = [{ $id: 1, body: "Note 1", color: color, position: position }];
        if (notes)
            setNotes(notes);
    }
    return (
        <>
            {
                notes.map((note) => (
                    <NoteCard key={note.$id} note={note} />
                ))
            }
        </>
    );
}
export default NotesPage;

