import React from 'react';
import NoteCard from '../components/NoteCard';
import { note } from '../assets/fakeData';
type NotesPageProps = {
    notes: note[];
};
const NotesPage: React.FC<NotesPageProps> = ({ notes }) => {

    return (
        <>
            {
                notes.map((note, index) => (
                    <NoteCard key={note.$id} note={note} />
                ))
            }
        </>
    );
}
export default NotesPage;