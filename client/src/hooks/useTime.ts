import {useCallback} from 'react'
import {useTranslation} from "react-i18next";

export const useTime = () => {
    const {t} = useTranslation()
    const takeTime = useCallback((time: string):string=>{
        const currentTime: any = new Date();
        const tookTime: any = new Date(time)
        const min = Math.floor((Math.abs(tookTime - currentTime) / 1000) / 60);
        if (min > 59) {
            const hour = Math.floor(min / 60)
            if (hour > 24) {
                const day = Math.floor(hour / 24)
                if (day > 30) {
                    const month = Math.floor(day / 30)
                    if (month > 12) {
                        const years = Math.floor(month / 12)
                        return `${years} ${t('year')} ago`
                    } else {
                        return `${month} ${t('month')} ago`
                    }
                } else {
                    return `${day} ${t('day')} ago`
                }
            } else {
                return `${hour} ${t('hour')} ago`
            }

        } else {
            return `${min} ${t('minutes')} ago`
        }
    }, [])

    return {takeTime}
}