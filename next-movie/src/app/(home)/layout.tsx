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
      {filter}
      {hot}
      {movies}
      {tv}
    </div>
  );
}
