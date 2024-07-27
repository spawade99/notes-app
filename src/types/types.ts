export type note = {
    $id: number;
    body: string;
    color: color;
    position: position;
};
export type position = { x: number; y: number };
export type color = {
    id: string;
    colorHeader: string;
    colorBody: string;
    colorText: string;
};