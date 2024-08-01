import Button from "../../UI/Button"
import InputField from "../../UI/InputField"
import { useForm } from "react-hook-form"
export default function Form({formData}) {
    const { register, handleSubmit,  formState: { errors } } = useForm()
    const onSubmit = (data) => console.log(data)
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                formData.map(data=>{
                    const fieldName = data.label.split(' ').join('');
                    return <div key={data.id}>
                        <InputField label={data.label} {...register(fieldName)} errorMessage={errors[fieldName]?.message} />
                    </div>
                })
            }
            <Button type="submit">Save</Button>
        </form>
    )
}