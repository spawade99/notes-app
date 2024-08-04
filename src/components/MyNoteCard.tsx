import { getDatabase, set, ref } from "firebase/database";
import { Grip, Trash } from "lucide-react";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";

export const MyNoteCard = () => {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });


    const mouseDownHandler = (event: MouseEvent): void => {
        if (cardRef && cardRef.current) {
            // setZIndex(cardRef.current);
            console.log('mousedown');
            console.log(cardRef.current);
            postDataToDatabase('key', 'value');

        }
    }
    const postDataToDatabase = async (key: string, value: string) => {
        const payload = { "body": "This is a test note updated" };
        const db = getDatabase();
        try {
            // await db.notes.update(note.$id, payload);
            await set(ref(db, 'notes/'), payload);
        } catch (error) {
            console.error(error)
        }
    }
    const getDatabaseData = async (key: string) => {
        const db = getDatabase();
        try {
            // await db.notes.update(note.$id, payload);
            set(ref(db, 'notes/'), key);
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <Card
            ref={cardRef}
            className="max-w-xs min-h-max p-1"
        // onMouseDown={mouseDownHandler}
        >
            <CardHeader>
                <CardTitle className="text-2xl flex flex-row items-center justify-between">
                    <Grip />
                    Note title
                    <Trash />
                </CardTitle>
            </CardHeader>
            <CardContent className='p-1 pt-0'>
                <Textarea
                    placeholder="Enter your email below to login to your account"
                    className="resize-y"
                />
            </CardContent>
        </Card>
    );
}