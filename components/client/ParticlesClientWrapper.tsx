'use client';

import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(() => import('@/components/ParticlesBckground'), {
    ssr: false,
});

export default function ParticlesClientWrapper({ className }: { className?: string }) {
    return <ParticlesBackground className={className} />;
}
