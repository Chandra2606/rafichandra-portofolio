'use client';

import React, { ReactNode } from 'react';
import { useMobile, useTablet, useDesktop } from '@/hooks/useMediaQuery';

interface ResponsiveProps {
    children: ReactNode;
    fallback?: ReactNode;
    mobile?: boolean;
    tablet?: boolean;
    desktop?: boolean;
}

/**
 * Komponen yang hanya menampilkan children pada ukuran layar tertentu
 * Contoh penggunaan:
 * 
 * <Responsive mobile>
 *   Konten hanya untuk mobile
 * </Responsive>
 * 
 * <Responsive tablet desktop>
 *   Konten untuk tablet dan desktop
 * </Responsive>
 * 
 * <Responsive mobile fallback={<div>Konten Desktop</div>}>
 *   Konten Mobile
 * </Responsive>
 */
export default function Responsive({
    children,
    fallback = null,
    mobile = false,
    tablet = false,
    desktop = false
}: ResponsiveProps) {
    const isMobile = useMobile();
    const isTablet = useTablet();
    const isDesktop = useDesktop();

    // Jika tidak ada props yang ditetapkan, tampilkan di semua perangkat
    if (!mobile && !tablet && !desktop) {
        return <>{children}</>;
    }

    // Cek apakah konten harus ditampilkan pada ukuran saat ini
    const shouldRender =
        (mobile && isMobile) ||
        (tablet && isTablet) ||
        (desktop && isDesktop);

    return shouldRender ? <>{children}</> : <>{fallback}</>;
}

/**
 * Komponen yang hanya ditampilkan di mobile
 */
export function MobileOnly({ children, fallback = null }: Omit<ResponsiveProps, 'mobile' | 'tablet' | 'desktop'>) {
    return <Responsive mobile fallback={fallback}>{children}</Responsive>;
}

/**
 * Komponen yang hanya ditampilkan di tablet
 */
export function TabletOnly({ children, fallback = null }: Omit<ResponsiveProps, 'mobile' | 'tablet' | 'desktop'>) {
    return <Responsive tablet fallback={fallback}>{children}</Responsive>;
}

/**
 * Komponen yang hanya ditampilkan di desktop
 */
export function DesktopOnly({ children, fallback = null }: Omit<ResponsiveProps, 'mobile' | 'tablet' | 'desktop'>) {
    return <Responsive desktop fallback={fallback}>{children}</Responsive>;
}

/**
 * Komponen yang tidak ditampilkan di mobile
 */
export function HideOnMobile({ children, fallback = null }: Omit<ResponsiveProps, 'mobile' | 'tablet' | 'desktop'>) {
    return <Responsive tablet desktop fallback={fallback}>{children}</Responsive>;
} 