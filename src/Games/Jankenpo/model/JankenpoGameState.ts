
export const JankenpoGameState = {
    P1WIN: "p1win",
    P2WIN: "p2win",
    DRAW: "draw"
} as const
export type JankenpoGameStateType = ConstantValues<typeof JankenpoGameState>

  