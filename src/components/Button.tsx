const Button: React.FunctionComponent<
  React.ComponentProps<"button"> & { Icon?: React.ElementType }
> = ({ children, className, Icon, ...props }) => {
  return (
    <button className={`${className} items-center text-lg`} {...props}>
      {Icon ? <Icon className="fill-current h-5 w-5 mr-2" /> : null}
      <span>{children}</span>
    </button>
  );
};

export default Button;
