import InputField from "../UI/InputField"
import { useForm } from "react-hook-form"
import Button from "../UI/Button"
import { useMutation } from "@tanstack/react-query"
import axios from "../utils/axios"
import { useAuthContext } from "../../context/authContext"
import Cookies from "universal-cookie";
import { useLocation, useNavigate } from "react-router-dom"

export default function Login() {
const navigate = useNavigate()
const location = useLocation()
const { register, handleSubmit,  formState: { errors } } = useForm()
const cookies = new Cookies({ path: "/" });
const from = "/";
const {setAuth} = useAuthContext()
const mutation= useMutation({
    mutationFn: data => 
        axios.post('/sign-in',data,{
            headers: {
                'Content-Type' : 'application/json',
            }
        })
})
const onSubmit = async data => {
    mutation.mutate(
        {
            ...data
        },
        {
            onSuccess: response => {
                const userData={
                    accessToken : response?.data?.token,
                    username: response?.data?.username
                }
                setAuth(userData)
                cookies.set("userDetails",userData)
                navigate(from, { replace: true });
                reset()
            }
        },
        {
            onError: err => {
                console.log(err)
            }
        }
    )
}
    return(
        <div className="w-full h-full flex justify-center items-center">   
            <form className="flex flex-col w-4/5 md:w-1/2" onSubmit={handleSubmit(onSubmit)}>
                <InputField label={"Username"} {...register('username')} errorMessage={errors.username?.message}/>
                <InputField label={"Password"} {...register('password')} errorMessage={errors.password?.message}/>
                {/* <input type="text" {...register("name")} />
      <input type="number" {...register("age")} /> */}
                <Button type="submit" className="mt-4 w-[200px]">
                    Login
                </Button>
            </form>
        </div>
    )
}