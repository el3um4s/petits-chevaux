import match from "../Utility/match"
import { typeStatus, typeWin } from "./messages"


export interface Message {
    type: string;
    content: string;
}

// const targetOrigin = "http://localhost:5000";
// const targetOrigin = "https://c3demo.stranianelli.com";
const targetOrigin = "https://el3um4s.github.io/petits-chevaux"

export function sendMessage(iframe: HTMLIFrameElement, message: Message, targetOrigin: string = "*") {
    iframe.contentWindow.postMessage(message, targetOrigin);
}

export function attachListeners() {
    if (globalThis.addEventListener) {
        globalThis.addEventListener("message", getMessage, false);
    } else {
        globalThis.attachEvent("onmessage", getMessage);
    }
}

function getMessage(event: MessageEvent) {
    if (event.origin !== targetOrigin) {
        console.log("Error, wrong origin");
    } else {
        const message: Message = event.data;
        console.log(message)
        match(message.type)
            .on(t => t === "status", () => typeStatus(message.content))
            .on(t => t === "win", () => typeWin(message.content))
            .otherwise(t => () => 0);
    }
}

