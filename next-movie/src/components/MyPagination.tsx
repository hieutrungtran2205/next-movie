import { Pagination, PaginationItem } from '@mui/material';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import { BACKGROUND_COLOR } from '../utils/const';

interface PaginationComponentProps {
  totalPages: number;
  // currentPage: number;
}

const MyPagination: React.FC<PaginationComponentProps> = ({ totalPages }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  return (
    <Pagination
      page={currentPage}
      count={totalPages}
      renderItem={(item) => (
        <PaginationItem
          sx={{
            color: '#ccc',
            '&.Mui-selected': {
              backgroundColor: '#fcde56',
              color: BACKGROUND_COLOR
            },
            '&.MuiPaginationItem-ellipsis': {
              color: 'red'
            }
          }}
          component={Link}
          href={`${pathname}?page=${item.page === 1 ? 1 : item.page}`}
          {...item}
        />
      )}
    />
  );
};

export default MyPagination;
