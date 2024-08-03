import { Position } from "./types/types";

export const SetNewOffset = (card: HTMLDivElement, mouseMoveDir: Position) => {
    const offsetLeft = card.offsetLeft - mouseMoveDir.x;
    const offsetTop = card.offsetTop - mouseMoveDir.y;

    return {
        x: offsetLeft < 0 ? 0 : offsetLeft,
        y: offsetTop < 0 ? 0 : offsetTop,
    };
}

export const autoGrow = (element: React.RefObject<HTMLTextAreaElement>) => {
    if (element.current) {
        element.current.style.height = "auto";
        element.current.style.height = element.current.scrollHeight + "px";
    }
}

export const setZIndex = (selectedCard: HTMLDivElement) => {
    selectedCard.style.zIndex = "100";
    Array.from(document.getElementsByClassName("card")).forEach((card) => {
        if (card !== selectedCard) {
            (card as HTMLDivElement).style.zIndex = "99";
        }
    });
}