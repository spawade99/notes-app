import React, { useEffect, useState } from 'react';
import NoteCard from './NoteCard';
import { Note } from '../types/types';
import { useAuth } from '../contexts/authContext';

const NotesPage = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const auth = useAuth();
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
        <><h1>Your signed in with user {auth?.currentUser?.email}</h1>
            {
                notes.map((note) => (
                    console.log(note),
                    <NoteCard key={note.$id} note={note} />
                ))
            }
        </>
    );
}
export default NotesPage;

