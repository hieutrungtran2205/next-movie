import Filter from '@/common/components/filter/Filter';
import { Box } from '@mui/material';

function FilterSlot() {
  return (
    <Box display={{ xs: 'none', lg: 'block' }}>
      <Filter />
    </Box>
  );
}

export default FilterSlot;
