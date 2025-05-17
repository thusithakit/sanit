"use client";

import { useEffect, useId, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

import React from 'react'

const ParticlesBackground = ({ className }: { className?: string }) => {
    const [init, setInit] = useState(false);
    const id = useId();
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: { enable: false },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#0C5ADB88",
                },
                links: {
                    color: "#0C5ADB50",
                    distance: 150,
                    enable: true,
                    opacity: 0.7,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: OutMode.out,
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 200,
                },
                opacity: {
                    value: 0.4,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 2, max: 8 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (
            <div className={`absolute w-[1200px] h-full overflow-hidden z-0  ${className}`}>
                <Particles
                    id={`tsparticles-${id}`}
                    particlesLoaded={particlesLoaded}
                    options={options}
                    className="absolute inset-0 w-full h-full"
                />
            </div>

        );
    }

    return <></>;
}

export default ParticlesBackground