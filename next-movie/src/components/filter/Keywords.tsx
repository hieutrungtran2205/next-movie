import { ICON_COLOR } from '@/utils/const';
import { FormControl, TextField } from '@mui/material';

function Keywords({ onChange }: any) {
  return (
    <FormControl sx={{ width: '100%' }}>
      <TextField
        autoFocus
        name="keywords"
        id="keywords"
        label="Từ khóa"
        variant="outlined"
        size="small"
        InputProps={{
          style: { color: 'white' } // Change the text color
        }}
        InputLabelProps={{
          sx: {
            color: 'white', // Default color
            '&.Mui-focused': {
              color: 'white' // Color when focused
            }
          }
        }}
        sx={{
          width: '100%',
          // Border color when not focused
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: ICON_COLOR
            },
            // Border color on hover
            '&:hover fieldset': {
              borderColor: ICON_COLOR
            },
            // Border color when focused
            '&.Mui-focused fieldset': {
              borderColor: ICON_COLOR
            }
          }
        }}
        onChange={onChange}
      />
    </FormControl>
  );
}

export default Keywords;
