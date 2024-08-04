import React from 'react';
import { UploadOutlined,PlusOutlined } from '@ant-design/icons';
import { Button, message, Upload, Space, Image } from 'antd';
import { UploadSvg, RightArrowSvg } from '../../assets/AllSvg';
import { useState } from 'react';

const props = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
export default function FileInput({ label }) {
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const [previewOpen, setPreviewOpen] = useState(true);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([
  ]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button className='flex flex-col justify-center items-center px-3 bg-white '>
      <UploadSvg className="h-12 w-12 text-primary font-semibold" /><p className='text-xs font-medium text-blackText'>Select a file or drag here</p>
    </button>
  );
  return (
    label ?
      (<div className='mb-4'>
        <p className=' text-formText mb-2 '>{label}</p>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          style={{backgroundColor: "white"}}>
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        {previewImage && (
        <Image
          wrapperStyle={{
            display: 'none',
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
      </div>) :
      (
        <Upload {...props}>
          <Button className='lg:px-72 px-20 border-2 border-primaryBorder' style={{ height: "120px", borderStyle: "dashed", display: 'flex', flexDirection: "column" }}><UploadSvg className="h-12 w-12 text-primary font-semibold" /><p className='text-sm font-medium text-blackText'>Select a file or drag here</p></Button>
        </Upload>
      )
  )
}