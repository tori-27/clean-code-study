import { GameSymbol } from "./game-symbol"

export function GameMoveInfo({currentMove, nextMove }){
    return (
        <>
            <div className="flex items-center gap-1 text-xl leading-tight">
                Step: <GameSymbol symbol={currentMove} className="w-4 h-4"/>
            </div>
            <div className="flex items-center gap-1 text-xs leading-tight test-slate-400">
                Next: <GameSymbol symbol={nextMove} className="w-3 h-3"/>
            </div>
        </>

    )
}