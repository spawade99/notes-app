export type note = {
    $id: number;
    body: string;
    colors: string;
    position: position;
};
export type position = { x: number; y: number };
export type color = {
    id: number;
    colorHeader: string;
    colorBody: string;
    colorText: string;
};
export const fakeData: note[] = [
    {
        $id: 1,
        body: JSON.stringify(
            'Resources:\n- Book: "You Don\'t Know JS: Scope & Closures" by Kyle Simpson.\n\n- Online Course: "JavaScript Patterns" on Udemy.\n\n- Articles:\n"Understanding JavaScript Closures" on Medium.\n\n"Mastering JavaScript Modules" on Dev.to.'
        ),
        colors: JSON.stringify({
            id: "color-purple",
            colorHeader: "#FED0FD",
            colorBody: "#FEE5FD",
            colorText: "#18181A",
        }),
        position: { x: 505, y: 10 },
    },
    {
        $id: 2,
        body: JSON.stringify(
            'Resources:\n- Book: "You Don\'t Know JS: Scope & Closures" by Kyle Simpson.\n\n- Online Course: "JavaScript Patterns" on Udemy.\n\n- Articles:\n"Understanding JavaScript Closures" on Medium.\n\n"Mastering JavaScript Modules" on Dev.to.'
        ),
        colors: JSON.stringify({
            id: "color-blue",
            colorHeader: "#9BD1DE",
            colorBody: "#A6DCE9",
            colorText: "#18181A",
        }),
        position: { x: 305, y: 110 },
    },
    {
        $id: 3,
        body: JSON.stringify(
            'Resources:\n- Book: "You Don\'t Know JS: Scope & Closures" by Kyle Simpson.\n\n- Online Course: "JavaScript Patterns" on Udemy.\n\n- Articles:\n"Understanding JavaScript Closures" on Medium.\n\n"Mastering JavaScript Modules" on Dev.to.'
        ),
        colors: JSON.stringify({
            id: "color-yellow",
            colorHeader: "#FFEFBE",
            colorBody: "#FFF5DF",
            colorText: "#18181A",
        }),
        position: { x: 605, y: 500 },
    },
];