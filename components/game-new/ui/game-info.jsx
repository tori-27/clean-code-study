import { StarIcon } from "./icons/star-icon"
import { HistryIcon } from "./icons/histry-icon"
import { UserIcon } from "./icons/user-icon"

export function GameInfo({
    playersCount,
    isRatingGame=true,
    timeMode
}){
    return (
        <div className="flex items-center gap-3 text-xs text-slate-400">
            {isRatingGame && <StarIcon/>}
            <div className="flex items-center gap-1">
                <UserIcon/>{playersCount}
            </div>
            <div className="flex items-center gap-1">
                <HistryIcon/> {timeMode}
            </div>
        </div>
    )
}