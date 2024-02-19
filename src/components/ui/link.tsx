import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { cn } from "src/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

const Link = ({ className, variant, size, ...props }: LinkProps) => {
  return (
    <a
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Link }
