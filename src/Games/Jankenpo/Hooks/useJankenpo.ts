import React from "react"

interface JankenpoReturn {
    runTurn: () => void
}

export const useJankenpo = (): JankenpoReturn  => {
    const runTurn = () => { console.log("Yaaay") }

    return { runTurn }
}