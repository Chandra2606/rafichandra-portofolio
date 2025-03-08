"use client";

import React, { ReactNode } from "react";

import { useMobile, useTablet, useDesktop } from "@/hooks/useMediaQuery";

interface ResponsiveProps {
  children: ReactNode;
  fallback?: ReactNode;
  mobile?: boolean;
  tablet?: boolean;
  desktop?: boolean;
}

export default function Responsive({
  children,
  fallback = null,
  mobile = false,
  tablet = false,
  desktop = false,
}: ResponsiveProps) {
  const isMobile = useMobile();
  const isTablet = useTablet();
  const isDesktop = useDesktop();

  if (!mobile && !tablet && !desktop) {
    return <>{children}</>;
  }

  const shouldRender =
    (mobile && isMobile) || (tablet && isTablet) || (desktop && isDesktop);

  return shouldRender ? <>{children}</> : <>{fallback}</>;
}

export function MobileOnly({
  children,
  fallback = null,
}: Omit<ResponsiveProps, "mobile" | "tablet" | "desktop">) {
  return (
    <Responsive mobile fallback={fallback}>
      {children}
    </Responsive>
  );
}

export function TabletOnly({
  children,
  fallback = null,
}: Omit<ResponsiveProps, "mobile" | "tablet" | "desktop">) {
  return (
    <Responsive tablet fallback={fallback}>
      {children}
    </Responsive>
  );
}


export function DesktopOnly({
  children,
  fallback = null,
}: Omit<ResponsiveProps, "mobile" | "tablet" | "desktop">) {
  return (
    <Responsive desktop fallback={fallback}>
      {children}
    </Responsive>
  );
}


export function HideOnMobile({
  children,
  fallback = null,
}: Omit<ResponsiveProps, "mobile" | "tablet" | "desktop">) {
  return (
    <Responsive desktop tablet fallback={fallback}>
      {children}
    </Responsive>
  );
}
