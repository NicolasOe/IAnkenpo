import { JankenpoMove } from '../model/JankenpoMove'

import rockImg from '../assets/rock.png'
import paperImg from '../assets/paper.png'
import scissorsImg from '../assets/scissors.png'
import questionMarkImg from '../assets/question_mark.png'


export const moveImg = {
    [JankenpoMove.GU]: rockImg,
    [JankenpoMove.CHOKI]: scissorsImg,
    [JankenpoMove.PA]: paperImg,
    [JankenpoMove.NONE]: questionMarkImg,
    'undefined': questionMarkImg
}
export type MoveImgType = ConstantValues<typeof moveImg>