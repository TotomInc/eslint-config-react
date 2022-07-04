type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({ children, variant, ...props }) => (
  <button className={`btn-${variant}`} type="button" {...props}>
    {children}
  </button>
);

export const App: React.FC = () => {
  return (
    <main>
      <Button variant="primary">Hello, World</Button>
    </main>
  );
};
