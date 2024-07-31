import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { UploadSvg, RightArrowSvg } from '../../assets/AllSvg';
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
export default function FileInput() {
    return(
        <Upload {...props}>
            <Button className='lg:px-72 px-20 border-2 border-primaryBorder' style={{height:"120px",borderStyle:"dashed",display:'flex',flexDirection:"column"}}><UploadSvg className="h-12 w-12 text-primary font-semibold" /><p className='text-sm font-medium text-blackText'>Select a file or drag here</p></Button>
        </Upload>
        
    )
}