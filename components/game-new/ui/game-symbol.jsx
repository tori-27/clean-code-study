import { CrossIcon } from "./icons/cross-icon"
import { ZeroIcon } from "./icons/zero-icon"
import { SquareIcon } from "./icons/square-icon"
import { TringleIcon } from "./icons/tringle-icon"
import { GAME_SYMBOLS } from "../constants"

export function GameSymbol({symbol, className}){
    const Icon = {
        [GAME_SYMBOLS.CROSS]: CrossIcon,
        [GAME_SYMBOLS.ZERO]: ZeroIcon,
        [GAME_SYMBOLS.SQUARE]: SquareIcon,
        [GAME_SYMBOLS.TRINGLE]: TringleIcon, 
    }[symbol] ?? CrossIcon;

    return <Icon className={className}/>
}