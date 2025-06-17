import { CONTENT_MAX_WIDTH } from '@/utils/const';

interface HomeLayoutProps {
  children: React.ReactNode;
  banner: React.ReactNode;
  hot: React.ReactNode;
  movies: React.ReactNode;
  tv: React.ReactNode;
  filter: React.ReactNode;
}

export default function HomeLayout({ children, banner, hot, movies, tv, filter }: HomeLayoutProps) {
  return (
    <div>
      {banner}
      <div style={{ width: CONTENT_MAX_WIDTH, margin: '0 auto' }}>
        {filter}
        {hot}
        {movies}
        {tv}
      </div>
    </div>
  );
}
