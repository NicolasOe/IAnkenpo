export const Option = {
    GU: 'gu',
    CHOKI: 'choki',
    PA: 'pa',
  } as const
  
  export type OptionType = ConstantValues<typeof Option>
  