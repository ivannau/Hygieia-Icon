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
        absoluteStrokeWidth = false,
        color = 'currentColor',
        className = '',
        children,
        ...rest
      },
      ref
    ) => {
      const numericSize = Number(String(size).replace(/px$/i, '')) || 24;
      const numericStroke = Number(String(strokeWidth).replace(/px$/i, '')) || 2;
      const calculatedStrokeWidth = absoluteStrokeWidth
        ? (numericStroke * 24) / numericSize
        : strokeWidth;

      return (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={calculatedStrokeWidth}
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
