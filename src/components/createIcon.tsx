import React, { forwardRef } from 'react';
import { IconProps } from '../types';

export const createIcon = (
  displayName: string,
  paths: React.ReactNode
) => {
  const Component = forwardRef<SVGSVGElement, IconProps>(
    (
      {
        size = 24,
        strokeWidth = 2,
        color = 'currentColor',
        className = '',
        children,
        ...rest
      },
      ref
    ) => {
      return (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`hygieia-icon hygieia-icon-${displayName.toLowerCase()} ${className}`.trim()}
          {...rest}
        >
          {paths}
          {children}
        </svg>
      );
    }
  );

  Component.displayName = displayName;
  return Component;
};
