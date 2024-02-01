import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast'
import axios from 'axios';

import Input from "@/components/Input";
import { useState } from 'react';
import Textarea from '@/components/Textarea';

const listInputs = [
    {
        id: 'name',
        placeholder: 'Alvin Irwanto'
    },
    {
        id: 'email',
        placeholder: 'abc@gmail.com'
    },
    {
        id: 'subject',
        placeholder: 'request to ...'
    },
    {
        id: 'message',
        placeholder: 'Hello, I am ...'
    },
]

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().min(1, 'Email is required'),
    subject: z.string().min(1, 'Subject is required'),
    message: z.string().min(1, 'Message is required'),
})

export default function FormContact() {

    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        resolver: zodResolver(schema),
        mode: "onTouched"
    });


    const onHandleFormSubmit = async (data) => {
        setIsLoading(true)
        axios.post('/api/contact', data)
            .then((res) => {
                toast.success('Message Sent Successfully');
                reset()
            })
            .catch((errors) => {
                toast.error('Something went wrong!')
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

    return (
        <div className='w-full flex justify-end my-[5rem]'>
            <form className='w-[90%] flex flex-col gap-4' onSubmit={handleSubmit(onHandleFormSubmit)}>
                {
                    listInputs.map((input, i) => {
                        return input.id === 'message'
                            ? <Textarea
                                key={i}
                                id={input.id}
                                label={input.id}
                                placeholder={input.placeholder}
                                register={register}
                                errors={errors}
                            />
                            : <Input
                                key={i}
                                id={input.id}
                                label={input.id}
                                placeholder={input.placeholder}
                                register={register}
                                errors={errors}
                            />
                    })
                }
                <button disabled={isLoading || !isValid} className='w-full bg-blue-primary h-[3.5rem] text-black-primary font-semibold disabled:bg-blue-secondary disabled:cursor-not-allowed'>{isLoading ? '...' : 'Submit'}</button>
            </form>

        </div>
    )
}
