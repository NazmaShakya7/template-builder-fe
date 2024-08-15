import { useParams } from "react-router-dom";
import Button from "../../UI/Button";
import InputField from "../../UI/InputField";
import { useForm } from "react-hook-form";
import { useSectionData } from "../../../hooks/useQueryData";
import { useEffect } from "react";

export default function Form({ active,handleData }) {
    const { id } = useParams();
    const { data: sectionData, isLoading } = useSectionData(id, active);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {}
    });

    useEffect(() => {
        if (sectionData?.data) {
            reset(sectionData.data);
        }
    }, [sectionData, reset]);

    const onSubmit = (result) => {
        handleData(result)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                Object.entries(sectionData?.data || {}).map(([key, value]) => {
                    const fieldName = key.split(/(?=[A-Z])/).join(' ').toUpperCase();

                    return (
                        <div key={key}>
                            <InputField
                                label={fieldName}
                                {...register(key)}
                                errorMessage={errors[key]?.message}
                            />
                        </div>
                    );
                })
            )}
            <Button type="submit">Save</Button>
        </form>
    );
}
