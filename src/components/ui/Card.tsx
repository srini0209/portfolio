// src/components/ui/Card.tsx
import * as React from "react"
import { cn } from '../../app/lib/utils'
export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
            {...props}
        />
    )
)

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
    )
)

Card.displayName = 'Card';
CardContent.displayName = 'CardContent'