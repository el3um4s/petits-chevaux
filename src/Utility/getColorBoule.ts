import match from "./match"

export default function getColorBoule(val:string):string {
    const result: string =  match(val)
                .on((n: string) => ["2", "4", "7", "9"].includes(n), () => "red")
                .on((n: string) => ["1", "3", "6", "8"].includes(n), () => "blue")
                .on((n: string) => n === "5", () => "green")
                .otherwise((n: string) => () => "normal");
    return result;
}