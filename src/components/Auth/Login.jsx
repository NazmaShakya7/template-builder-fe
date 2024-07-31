import InputField from "../UI/InputField"
import { useForm } from "react-hook-form"
import Button from "../UI/Button"
export default function Login() {
const { register, handleSubmit,  formState: { errors } } = useForm()
console.log("--------Register---------",register)
const onSubmit = (data) => console.log(data)
    return(
        <div className="w-full h-full flex justify-center items-center">   
            <form className="flex flex-col w-4/5 md:w-1/2" onSubmit={handleSubmit(onSubmit)}>
                <InputField label={"Username"} {...register('username')} errorMessage={errors.username?.message}/>
                <InputField label={"Password"} {...register('password')} errorMessage={errors.password?.message}/>
                <Button type="submit" className="mt-4">
                    Login
                </Button>
            </form>
        </div>
    )
}