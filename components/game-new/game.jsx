import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { BackLink } from "./ui/back-link";
import { GameTitle } from "./ui/game-title";
import { PLAYERS } from "./constants";
import { PlayerInfo } from "./ui/player-info";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameCell } from "./ui/game-cell";
import { GameOverModal } from "./ui/game-over-modal";
import { initGameState } from "./model/game-state-reducer";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import { getNextMove } from "./model/get-next-move";
import { computeWinner } from "./model/compute-winner";
import { GAME_STATE_ACTIONS, gameStateReducer } from "./model/game-state-reducer";
import { useReducer } from "react";
import { computePlayerTimer } from "./model/compute-player-timer";
import { useInterval } from "../lib/timers";

const PLAYERS_COUNT=2

export function Game(){
    const [gameState, dispatch] = useReducer(
        gameStateReducer,
        { playersCount: PLAYERS_COUNT, defaultTimer: 60*1000, currentMoveStart: Date.now() },
        initGameState,
    );

    useInterval(1000, gameState.currentMoveStart, () => {
        dispatch({type: GAME_STATE_ACTIONS.TICK, now: Date.now(),})
    })

    const winnerSequence = computeWinner(gameState.cells);
    const nextMove = getNextMove(gameState);
    const winnerSymbol = computeWinnerSymbol(gameState, {winnerSequence, nextMove})

    const winnerPlayer = PLAYERS.find(player => player.symbol === winnerSymbol)


    return (
        <>
            <GameLayout
                backLink={<BackLink/>} 
                title={<GameTitle/>} 
                gameInfo={
                    <GameInfo isRatingGame playersCount={4} timeMode={"1 min per step"}/>
                }
                playersList={
                    PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
                        const {timer, timerStartAt} = computePlayerTimer(gameState, player.symbol)
                        return (
                            <PlayerInfo 
                                key={player.id} 
                                avatar={player.avatar}
                                isRight={index % 2 === 1}
                                name={player.name}
                                rating={player.rating}
                                symbol={player.symbol}
                                timer={timer}
                                timerStartAt={timerStartAt}
                            />
                        )
                    })
                }
                gameMoveInfo={<GameMoveInfo currentMove={gameState.currentMove} nextMove={nextMove}/>}
                gameCells={gameState.cells.map((cell, index) => (
                    <GameCell 
                        key={index}
                        disabled={!!winnerSymbol}
                        onClick={() => {
                            dispatch({
                                type: GAME_STATE_ACTIONS.CELL_CLICK,
                                index,
                                now: Date.now()
                            })
                        }}
                        isWinner={winnerSequence?.includes(index)}
                        symbol={cell}
                    />))}
            />
            <GameOverModal
                winnerName={winnerPlayer?.name}
                players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
                        <PlayerInfo 
                            key={player.id} 
                            avatar={player.avatar}
                            isRight={index % 2 === 1}
                            name={player.name}
                            rating={player.rating}
                            timer={gameState.timers[player.symbol]}
                            symbol={player.symbol}
                        />
                    ))}/>
        </>
        
    )
}