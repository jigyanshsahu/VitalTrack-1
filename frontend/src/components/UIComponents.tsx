import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

// --- Card ---
interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  action?: ReactNode;
  variant?: 'default' | 'danger';
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, action, variant = 'default' }) => {
  const borderColor = variant === 'danger' ? 'border-red-200' : 'border-slate-200';
  const bgColor = variant === 'danger' ? 'bg-red-50' : 'bg-white';

  return (
    <div className={`rounded-2xl shadow-sm border ${borderColor} ${bgColor} p-5 ${className}`}>
      {(title || action) && (
        <div className="flex justify-between items-center mb-4">
          {title && <h3 className={`text-xl font-bold ${variant === 'danger' ? 'text-red-800' : 'text-slate-800'}`}>{title}</h3>}
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
};

// --- Button ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost';
  size?: 'md' | 'lg';
  icon?: LucideIcon;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, variant = 'primary', size = 'lg', icon: Icon, fullWidth, className = '', ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-opacity-50 active:scale-95";
  
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-300 shadow-md shadow-emerald-200",
    secondary: "bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-300 shadow-md shadow-sky-200",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300 shadow-md shadow-red-200",
    outline: "border-2 border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-slate-200",
    ghost: "text-slate-600 hover:bg-slate-100",
  };

  const sizes = {
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg", // Large touch targets
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`} 
      {...props}
    >
      {Icon && <Icon className={`w-6 h-6 ${children ? 'mr-2' : ''}`} />}
      {children}
    </button>
  );
};

// --- Badge ---
export const Badge: React.FC<{ status: 'normal' | 'warning' | 'critical'; children: ReactNode }> = ({ status, children }) => {
  const styles = {
    normal: 'bg-emerald-100 text-emerald-800',
    warning: 'bg-amber-100 text-amber-800',
    critical: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${styles[status]}`}>
      {children}
    </span>
  );
};
