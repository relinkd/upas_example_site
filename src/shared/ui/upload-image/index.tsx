import { useState } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { flexHelper, getToastMessage } from 'shared/lib';

import { Icon } from '../Icon';

type UploadImageComponentProps = {
  title: string;
  isBanner?: boolean;
  onUpload?: (file: File) => void;
  onDelete?: () => void;
};

// 30MB
const MAX_SIZE = 30 * 1024 * 1024;

export const UploadImageComponent = ({ title, onDelete, onUpload, isBanner = false }: UploadImageComponentProps) => {
  const theme = useTheme();
  const [previewImage, setPreviewImage] = useState('');

  const onDrop = async (acceptedFiles: File[], FileRejections: Array<FileRejection>) => {
    if (!acceptedFiles.length) {
      getToastMessage('error', FileRejections[0].errors[0].message);
      return;
    }

    const [currentFile] = acceptedFiles;

    if (onUpload) {
      try {
        await onUpload(currentFile);
      } catch (err) {
        getToastMessage('error', 'Unable to upload');
      }
    }

    const preview = URL.createObjectURL(currentFile);
    setPreviewImage(preview);
  };

  const clearPreview = () => {
    setPreviewImage('');
    if (onDelete) {
      onDelete();
    }
  };

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    accept: { 'image/svg+xml': [], 'image/jpg': [], 'image/png': [] },
    maxSize: MAX_SIZE,
    onDrop,
    multiple: false,
  });

  if (isBanner) {
    return (
      <>
        <Box
          {...getRootProps()}
          sx={{
            borderRadius: theme.themeColors.borderRadiusUploadImage,
            padding: '60px 10px 55px',
            background: theme.themeColors.colorUploadImageBackground,
            cursor: 'pointer',
            maxWidth: '560px',
            width: '100%',
            boxSizing: 'border-box',
            ...flexHelper('center', 'center', 'column'),
            ...(previewImage && { display: 'none' }),
          }}
        >
          <input {...getInputProps()} />
          <Box
            sx={{
              ...flexHelper(),
              width: '64px',
              height: '64px',
              border: theme.themeColors.colorUploadImageBorder,
              borderRadius: '50%',
            }}
          >
            <Icon type="upload-image" />
          </Box>
          {fileRejections?.[0]?.errors?.[0]?.message && (
            <Typography sx={{ mt: '16px', color: theme.themeColors.colorUploadImageError }}>
              {fileRejections?.[0]?.errors?.[0]?.message}
            </Typography>
          )}
          <Typography variant="subtitle2" className="light" sx={{ mt: '12px' }}>
            {title}
          </Typography>
          <Typography variant="subtitle2" className="light" sx={{ mt: '8px' }}>
            PNG, JPG, SVG, max size - 30MB
          </Typography>
        </Box>
        <Box
          component="img"
          src={previewImage}
          sx={{
            maxWidth: '560px',
            width: '100%',
            borderRadius: theme.themeColors.borderRadiusUploadImage,
            ...(!previewImage && { display: 'none' }),
          }}
        />
        <Button
          variant="contained"
          sx={{ mt: '32px', width: '102px', ...(!previewImage && { display: 'none' }) }}
          onClick={clearPreview}
        >
          Delete
        </Button>
      </>
    );
  }

  return previewImage ? (
    <Stack
      alignItems="center"
      sx={{
        ...(!previewImage && { display: 'none' }),
      }}
    >
      <Box
        component="img"
        src={previewImage}
        sx={{ width: '164px', height: '164px', borderRadius: '50%', ...(!previewImage && { display: 'none' }) }}
      />
      <Button variant="contained" sx={{ mt: '32px', width: '102px' }} onClick={clearPreview}>
        Delete
      </Button>
    </Stack>
  ) : (
    <Stack
      alignItems="center"
      sx={{
        ...(previewImage && { display: 'none' }),
      }}
    >
      <Box
        {...getRootProps()}
        sx={{
          ...flexHelper(),
          width: '164px',
          height: '164px',
          borderRadius: '50%',
          background: theme.themeColors.colorUploadImageBackground,
          cursor: 'pointer',
        }}
      >
        <input {...getInputProps()} />
        <Icon type="upload-image" />
      </Box>
      {fileRejections?.[0]?.errors?.[0]?.message && (
        <Typography sx={{ mt: '16px', color: theme.themeColors.colorUploadImageError }}>
          {fileRejections?.[0]?.errors?.[0]?.message}
        </Typography>
      )}
      <Typography variant="h5" sx={{ mt: '32px' }}>
        {title}
      </Typography>
      <Typography variant="subtitle2" className="light" sx={{ mt: 2 }}>
        PNG, JPG, SVG, max size - 30MB
      </Typography>
    </Stack>
  );
};
