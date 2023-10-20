import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * @default 'button'
   */
  children?: string;
  /**
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined';

  /**
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'disabled';
}

export const Button = ({ children = 'button', variant='contained',color='primary', ...otherProps }: ButtonProps) => {
  let btnClasses='';

  let contained = `${color}-contained`;
  let outlined = `${color}-outlined`;

  if(variant === 'contained'){
    btnClasses = contained;
  }
  if(variant === 'outlined'){
    btnClasses = outlined
  }

  return (
    <button className={btnClasses} {...otherProps}>
      {children}
    </button>
  )
}
