import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

// Here wa are creating a button component that can be used anywhere in the app
// this button component is a wrapper around the button element and it accepts all the props that a button element accepts
// ref here is used to get the reference of the button element in the DOM

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', children, disabled, type = 'button', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        `w-auto rounded-full bg-gray-800 border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
)

Button.displayName = 'Button'

export default Button
