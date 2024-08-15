
import { Button, Modal } from 'antd';
import InputField from '../../UI/InputField';
import { useForm } from "react-hook-form"
import { useCompanyCreateMutation } from '../../../hooks/useMutateData';
const Popup = ({open,handleOk,handleCancel}) => {
    const companyMutation = useCompanyCreateMutation()
    const { register, handleSubmit,  formState: { errors }, reset } = useForm()
    const onSubmit = (data) => {
        companyMutation.mutate(data, {
          onSuccess: (response) => {
            console.log(response.data);
            handleOk();
            reset(); 
          },
          onError: (error) => {
            console.error("Submission error:", error);
          }
        });
      };
    const formData = [
        {
            id: 1,
            label: 'Name',
            description: 'Enter the name of the entity',
        },
        {
            id: 2,
            label: 'Address',
            description: 'Enter the address of the entity',
        },
        {
            id: 3,
            label: 'Phone',
            description: 'Enter the contact phone number',
        },
        {
            id: 4,
            label: 'Logo',
            description: 'Upload the logo image file',
        },
        {
            id: 5,
            label: 'Slug',
            description: 'Enter the URL-friendly identifier (slug)',
        },
        // {
        //     id: 6,
        //     label: 'Template',
        //     description: 'Select the template for the entity',
        // },
        ];
  return (
    <>
      <Modal
        title="Create new Company"
        open={open}
        footer={[
            <Button key="back" onClick={handleCancel}>
                Back
            </Button>,
            <Button  key="submit" type="primary"  onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
        ]}
      >
        <form onSubmit={handleSubmit(onSubmit)}>

        {formData.map(data => {
            const fieldName = data.label.toLowerCase().split(' ').join('');
            return (
                <div key={data.id}>
                    <InputField 
                        label={data.label} 
                        {...register(fieldName)} 
                        errorMessage={errors[fieldName]?.message} 
                    />
                </div>
            );
        })}
        
        </form>
      </Modal>
    </>
  );
};
export default Popup;