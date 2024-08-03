export type Note = {
    $id: number;
    body: string;
    color: color;
    position: Position;
};
export type Position = { x: number; y: number };
export type color = {
    id: string;
    colorHeader: string;
    colorBody: string;
    colorText: string;
};