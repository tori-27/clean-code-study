import Link from "next/link"
import { ArrowLeftIcon } from "../game-new/ui/icons/arrow-left-icon"
import { StarIcon } from "../game-new/ui/icons/star-icon"
import { HistryIcon } from "../game-new/ui/icons/histry-icon"
import { UserIcon } from "../game-new/ui/icons/user-icon"

export function GameTitle({playersCount}){
    return( 
        <div className="pl-2">
            <Link href='#' className="flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5">
                <ArrowLeftIcon/>
                To main page
            </Link>
            <h1 className="text-4xl leading-tight">Tic Tac Toe</h1>
            <div className="flex items-center gap-3 text-xs text-slate-400">
                <StarIcon/>
                <div className="flex items-center gap-1">
                    <UserIcon/>{playersCount}
                </div>
                <div className="flex items-center gap-1">
                    <HistryIcon/> 1 min per step
                </div>
                
            </div>
        </div>
    )
}