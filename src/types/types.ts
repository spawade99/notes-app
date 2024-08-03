export type Note = {
    $id: number;
    body: string;
    color: Color;
    position: Position;
};
export type Position = { x: number; y: number };
export type Color = {
    id: string;
    colorHeader: string;
    colorBody: string;
    colorText: string;
};