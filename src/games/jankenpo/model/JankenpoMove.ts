
export const JankenpoMove = {
    GU: 'GU',
    CHOKI: 'CHOKI',
    PA: 'PA',
    NONE: 'NONE'
  } as const
  
export type JankenpoMoveType = ConstantValues<typeof JankenpoMove>
  