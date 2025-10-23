import clsx from "clsx";
import { UiButton } from "../uikit/ui-button";
import { GameSymbol } from "./game-symbol";

export function GameField({className, cells, currentMove, handleCellClick, nextMove, winnerSequence, winnerSymbol}) {
    const actions = ( 
        <>
            <UiButton size="md" variant="primary">
                Draw
            </UiButton>
            <UiButton size="md" variant="outline">
                Give up
            </UiButton>
        </>
    )

    return (
        <GameFieldLayout className={className}>
            <GameMoveInfo 
                actions={actions}
                currentMove={currentMove}
                nextMove={nextMove}
            />
            <GameGrid>
                {cells.map((symbol, index) => (
                    <GameCell key={index}
                        disabled={!!winnerSymbol}
                        onClick={() => {handleCellClick(index)}}
                        isWinner={winnerSequence?.includes(index)}
                    >
                        {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
                    </GameCell>
                ))}
            </GameGrid>
        </GameFieldLayout>
    );
}

function GameCell({children, onClick, isWinner, disabled}){
    return(
        <button
            disabled={disabled} 
            className={clsx("border border-slate-200 -ml-px -mt-px flex items-center justify-center", isWinner && "bg-orange-600/10")}
            onClick={onClick}
            >
            {children}
        </button>
    )
}

function GameFieldLayout({children, className}){
    return (
        <div 
            className={clsx(
                className, 
                "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"
            )}
        >
            {children}
        </div>
    )
}

function GameMoveInfo({actions, currentMove, nextMove }){
    return (
        <div className="flex gap-3 items-center">
            <div className="mr-auto">
                <div className="flex items-center gap-1 text-xl leading-tight">
                    Step: <GameSymbol symbol={currentMove} className="w-4 h-4"/>
                </div>
                <div className="flex items-center gap-1 text-xs leading-tight test-slate-400">
                    Next: <GameSymbol symbol={nextMove} className="w-3 h-3"/>
                </div>
            </div> 
            {actions}
        </div>
    )
}

function GameGrid({children}){
    return(
            <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
                {children}
            </div>
    )

}