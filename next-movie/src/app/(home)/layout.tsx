interface HomeLayoutProps {
  children: React.ReactNode;
  banner: React.ReactNode;
  list: React.ReactNode;
}

export default function HomeLayout({ children, banner, list }: HomeLayoutProps) {
  return (
    <div>
      {banner}
      {list}
    </div>
  );
}
