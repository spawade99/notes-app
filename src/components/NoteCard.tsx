import React, { useEffect, useRef } from "react";
import { note } from "../assets/fakeData";

type NoteCardProps = {
    note: note;
};

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    let position = JSON.parse(note.position);
    const colors = JSON.parse(note.colors);
    const body = JSON.parse(note.body);
    useEffect(() => {
        autoGrow(textAreaRef);
    }, []);


    function autoGrow(textAreaRef: React.RefObject<HTMLTextAreaElement>) {
        const { current } = textAreaRef;
        if (current) {
            current.style.height = "auto"; // Reset the height
            current.style.height = current.scrollHeight + "px"; // Set the new height
        }
    }

    return (
        <div
            className="card"
            style={{
                backgroundColor: colors.colorBody,
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <div
                className="card-header"
                style={{ backgroundColor: colors.colorHeader }}
            />
            <div className="card-body">
                <textarea
                    ref={textAreaRef}
                    style={{ color: colors.colorText }}
                    defaultValue={body}
                    onInput={() => autoGrow(textAreaRef)}
                ></textarea>
            </div>
            {body}
        </div>
    );
};

export default NoteCard;



