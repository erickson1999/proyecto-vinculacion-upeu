import { FC, useContext } from "react"
import { ContextUI } from "../../context/ContextUI"
import { Button } from "../Button"


export interface ModalForRemoveI {
    children: string | JSX.Element,
    deleteItem: () => void
}
export const ModalForRemove: FC<ModalForRemoveI> = ({ children, deleteItem }) => {

    const { modal: { setIsOpenModal } } = useContext(ContextUI)


    return (
        <div className='flex flex-col gap-y-6 items-center'>
            {children}
            <div className='flex gap-x-4 justify-center '>
                <Button
                    onClick={deleteItem}
                    className='bg-opacity-80'
                    background={'bg-secondary'}
                    text={'si'}
                    padding={'px-5 py-2'}
                    rounded={'rounded-full'}
                    colorText={'text-white'} />
                <Button
                    onClick={() => { setIsOpenModal(false) }}
                    background={'bg-primary'}
                    text={'no'}
                    padding={'px-4 py-2'}
                    rounded={'rounded-full'}
                    colorText={'text-white'} />
            </div>
        </div>
    )
}
