const Main = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <main className={className}>{children}</main>;
};

export default Main;
