import { FC } from "react"

export const PhoneAndEmailContactInfo: FC<{ centerText?: boolean, flexRow?: boolean }> = ({ flexRow = false, centerText = false }) => {
    return (
        <div className={`flex gap-1 md:gap-2 ${flexRow === true ? "flex-row items-center" : "flex-col items-stretch"} ${centerText === true ? "text-center" : "text-start"} text-xs sm:text-xs-sm md:text-xs-md lg:text-xs-lg`}>
            <p className="text-accent">onyebuchivictor101@gmail.com</p>
            <p>+2349056043117</p>
        </div>
    )
}