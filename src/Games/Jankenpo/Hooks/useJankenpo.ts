import React from "react"

interface JankenpoReturn {
    run: () => void
}

export const useJankenpo = (): JankenpoReturn  => {
    const run = () => { console.log("Yaaay") }

    return { run }
}