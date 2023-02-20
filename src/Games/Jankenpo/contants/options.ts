export const Options = {
    GU: 'gu',
    CHOKI: 'choki',
    PA: 'pa',
  } as const
  
  export type OptionsType = ConstantValues<typeof Options>
  