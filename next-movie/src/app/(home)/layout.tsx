interface HomeLayoutProps {
  children: React.ReactNode;
  banner: React.ReactNode;
  hot: React.ReactNode;
  movies: React.ReactNode;
  tv: React.ReactNode;
}

export default function HomeLayout({ children, banner, hot, movies, tv }: HomeLayoutProps) {
  return (
    <div>
      {banner}
      {hot}
      {movies}
      {tv}
    </div>
  );
}
