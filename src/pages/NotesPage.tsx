import React, { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import { note } from '../types/types';
import { db } from '../appwriter/database';

const NotesPage = () => {
    const [notes, setNotes] = useState<note[]>([]);
    useEffect(() => {
        init();
    }, []);

    async function init() {
        const notes = await db.notes.list();
        if (notes)
            setNotes(notes.documents);
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

