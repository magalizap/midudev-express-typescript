import { Weather, Visibility } from "./enums";

export interface DiaryEntry { //pensada para ser extendida
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}

//export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'visibility' | 'weather'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'> // optimización de codigo a lo graaaandeee
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>