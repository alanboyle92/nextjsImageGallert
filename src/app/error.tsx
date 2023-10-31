"use client";

import { Button } from "react-bootstrap";

interface ErrorPageProps{
    error: Error,
    reset: () => void,
}

export default function Error({error, reset}: ErrorPageProps) {
    return (
        <div>
            <h1>Error 💀</h1>
            <p>There has been an issue</p>
            <Button onClick={reset}>Try Again</Button>
        </div>
    )
}