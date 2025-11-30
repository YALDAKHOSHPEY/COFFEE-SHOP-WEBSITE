export function Button({ children, href, onClick, variant = 'primary', className = '' }: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-colors';
  const variants = {
    primary: 'bg-yellow-600 hover:bg-yellow-700 text-white',
    secondary: 'border-2 border-white hover:bg-white hover:text-gray-900 text-white'
  };

  const classes = ${baseClasses}  ;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
