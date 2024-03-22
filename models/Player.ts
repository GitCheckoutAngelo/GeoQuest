import { Region } from "@/utils/enums/Region";

export interface Player {
    username: string,
    points: number,
    time: number,
    region: Region,
    avatar: string | null
}