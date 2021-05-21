import {useCallback} from 'react'

export const useTime = () => {
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
                        return `${years} years ago`
                    } else {
                        return `${month} month ago`
                    }
                } else {
                    return `${day} day ago`
                }
            } else {
                return `${hour} hours ago`
            }

        } else {
            return `${min} minutes ago`
        }
    }, [])

    return {takeTime}
}