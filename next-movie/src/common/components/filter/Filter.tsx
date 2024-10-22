'use client';

import { useState } from 'react';
import Keywords from './Keywords';
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

function Filter() {
  const [formData, setFormData] = useState({ keywords: '' });
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    router.push(`/tim-kiem?keywords=${formData.keywords}`);
  };
  return (
    <form onSubmit={onSubmit}>
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        <Keywords onChange={handleChange} />
        <Button type="submit" variant="contained" color="success" sx={{ width: 'fit-content', alignSelf: 'flex-end' }}>
          Duyệt phim
        </Button>
      </Box>
    </form>
  );
}

export default Filter;
