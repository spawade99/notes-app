import React, { useEffect, useRef, useState } from "react";
import { note } from "../types/types";
import Trash from "../icons/Trash";
import { SetNewOffset, autoGrow, setZIndex } from "../utils";

type NoteCardProps = {
    note: note;
};

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    // let position = JSON.parse(note.position);
    const colors = note.color;
    const body = note.body;
    let mouseStartPos = { x: 0, y: 0 };
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState(note.position);

    useEffect(() => {
        autoGrow(textAreaRef);
        return () => {
            document.removeEventListener("mousemove", mouseMove);
            document.removeEventListener("mouseup", mouseUp);
        }
    }, []);

    function mouseDown(e: React.MouseEvent) {
        if (cardRef && cardRef.current)
            setZIndex(cardRef.current);

        mouseStartPos = { x: e.clientX, y: e.clientY };
        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseup", mouseUp);
    }
    const mouseUp = () => {
        document.removeEventListener("mousemove", mouseMove);
        document.removeEventListener("mouseup", mouseUp);
    };
    function mouseMove(e: MouseEvent) {
        if (e) {
            let mouseMoveDir = {
                x: mouseStartPos.x - e.clientX,
                y: mouseStartPos.y - e.clientY,
            };

            mouseStartPos.x = e.clientX;
            mouseStartPos.y = e.clientY;

            if (cardRef && cardRef.current) {
                const newPosition = SetNewOffset(cardRef.current, mouseMoveDir);
                setPosition(newPosition);
            }
        }
    }


    return (
        <div
            className="card"
            ref={cardRef}
            style={{
                backgroundColor: colors.colorBody,
                left: `${position.x}px`,
                top: `${position.y}px`,
                position: "absolute"
            }}
            onMouseDown={mouseDown}
        >
            <div
                className="card-header"
                style={{ backgroundColor: colors.colorHeader }}
                onMouseDown={mouseDown}
            >
                <Trash />
                <span>First Note</span>
            </div>
            <div className="card-body">
                <textarea
                    ref={textAreaRef}
                    style={{ color: colors.colorText }}
                    defaultValue={body}
                    onInput={() => autoGrow(textAreaRef)}
                    onFocus={() => setZIndex(cardRef.current as HTMLDivElement)}
                ></textarea>
            </div>
        </div>
    );
};

export default NoteCard;



