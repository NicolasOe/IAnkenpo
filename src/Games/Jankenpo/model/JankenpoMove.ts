export const JankenpoMove = {
    GU: 'GU',
    CHOKI: 'CHOKI',
    PA: 'PA',
  } as const
  
export type JankenpoMoveType = ConstantValues<typeof JankenpoMove>
  