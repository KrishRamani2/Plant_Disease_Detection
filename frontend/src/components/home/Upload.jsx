import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload, message, Button, Card, Typography } from 'antd';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import axios from 'axios';
import app from '../../Firebase/database';

const { Paragraph, Title } = Typography;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const UploadImage = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [imageTags, setImageTags] = useState([]);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleClick = async () => {
    if (!fileList.length) {
      message.error('Please upload at least one image');
      return;
    }

    const storage = getStorage(app);
    const downloadUrls = [];
    for (const file of fileList) {
      const storageRef = ref(storage, `images/${file.name}`);
      try {
        await uploadBytes(storageRef, file.originFileObj);
        const downloadURL = await getDownloadURL(storageRef);
        downloadUrls.push(downloadURL);
        console.log('Uploaded Image Download URL:', downloadURL);
        const tags = await getImaggaTags(downloadURL);
        console.log('Image Tags from Imagga:', tags);
        setImageTags(tags);

      } catch (error) {
        console.error('Upload failed:', error);
        return;
      }
    }

    setImageUrls(downloadUrls);

    try {
      const response = await axios.post('http://localhost:8000/api/upload/images', {
        img1: downloadUrls,
      });
      console.log('API response:', response.data);
      message.success('Image Download URLs successfully posted to the API');
    } catch (error) {
      console.error('Failed to post download URLs to the API:', error);
    }
  };

  const getImaggaTags = async (imageUrl) => {
    const apiKey = 'acc_ceb24d1956db906';
    const apiSecret = 'b4ccc026ba549ae7329749ad27023a2f';

    try {
      const response = await axios.get('https://api.imagga.com/v2/tags', {
        params: {
          image_url: imageUrl,
        },
        auth: {
          username: apiKey,
          password: apiSecret,
        },
      });

      const tags = response.data.result.tags.map(tag => tag.tag.en);
      return tags;

    } catch (error) {
      console.error('Failed to get image tags from Imagga:', error);
      message.error('Failed to retrieve image tags from Imagga');
      return [];
    }
  };

  const uploadButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    background: '#f5f5f5', // Neutral background color
    border: '1px dashed #d9d9d9', // Neutral border color
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const uploadButtonHoverStyle = {
    ...uploadButtonStyle,
    backgroundColor: '#e6f7ff',
    borderColor: '#b0bec5',
  };

  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  };

  const previewImageStyle = {
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const uploadButtonElementStyle = {
    marginBottom: '20px',
    backgroundColor: '#1890ff',
    color: '#ffffff',
    borderRadius: '4px',
    border: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  };

  const imageUrlsStyle = {
    marginTop: '20px',
  };

  const imageCardStyle = {
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const uploadedImageStyle = {
    display: 'block',
    marginTop: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const imageTagsStyle = {
    marginTop: '20px',
  };

  const tagsParagraphStyle = {
    fontSize: '16px',
    color: '#595959',
    lineHeight: '1.5',
    textAlign: 'center',
  };

  const uploadButton = (
    <div
      style={uploadButtonStyle}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = uploadButtonHoverStyle.backgroundColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = uploadButtonStyle.backgroundColor)}
    >
      <PlusOutlined style={{ fontSize: '24px', color: '#000000' }} />
      <div style={{ marginTop: 8, fontSize: '16px', color: '#000000' }}>Upload</div>
    </div>
  );

  return (
    <div style={containerStyle}>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleFileChange}
        multiple
        style={{ marginBottom: '20px' }}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
          style={previewImageStyle}
        />
      )}
      <Button
        type="primary"
        onClick={handleClick}
        style={uploadButtonElementStyle}
      >
        Upload Images
      </Button>
      {imageUrls.length > 0 && (
        <div style={imageUrlsStyle}>
          <Title level={3} style={{ color: '#1890ff' }}>Uploaded Image Download URLs:</Title>
          <div>
            {imageUrls.map((url, index) => (
              <Card key={index} style={imageCardStyle}>
                <p style={{ fontSize: '14px', color: '#595959' }}>{url}</p>
                <Image
                  width={200}
                  src={url}
                  style={uploadedImageStyle}
                />
              </Card>
            ))}
          </div>
        </div>
      )}
      {imageTags.length > 0 && (
        <div style={imageTagsStyle}>
          <Paragraph style={tagsParagraphStyle}>{imageTags.join(', ')}</Paragraph>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
