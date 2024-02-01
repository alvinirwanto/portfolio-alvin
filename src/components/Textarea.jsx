import {
    RiInformationLine
} from 'react-icons/ri';

export default function Textarea({ id, label, placeholder, disabled, register, errors }) {
    return (
        <div className='flex flex-col gap-1 relative'>
            <label htmlFor={id} className='text-blue-primary capitalize text-sm font-semibold'>{label}</label>
            <textarea
                id={id}
                rows={10}
                placeholder={placeholder}
                disabled={disabled}
                {...register(id, { required: true })}
                type="text"
                className={`w-full text-white-primary p-4 text-lg corner-cut-4 focus:border-none focus:outline-none ${errors[id] ? 'bg-white-primary' : 'bg-white-secondary'}`}
            />
            {
                errors[id] && (
                    <>
                        <div className={` h-4 duration-300 mt-1 text-rose-300 flex justify-start items-center gap-1`}>
                            <RiInformationLine className={`text-sm ${errors[id] ? 'block' : 'hidden'} `} />
                            <p className='text-xs'>{errors[id]?.message}</p>
                        </div>

                        <div className='h-3 w-3 rounded-full bg-rose-500 absolute top-11 right-5'></div>
                    </>
                )
            }
        </div>
    )
}
