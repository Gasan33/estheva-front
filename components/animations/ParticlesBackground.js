import { memo, useEffect, useMemo, useState } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = memo((props) => {
    const [init, setInit] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Handle resize for responsiveness
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);  // Adjust for smaller screens
        };
        window.addEventListener("resize", handleResize);
        handleResize();  // Set initial state
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    useEffect(() => {
        const loadParticles = async () => {
            await initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            });
            setInit(true);
        };
        loadParticles();
    }, []);  // This effect only runs on mount

    const options = useMemo(
        () => ({
            fullScreen: { enable: false },
            background: {
                color: {
                    value: "#0d212c",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
                modes: {
                    push: {
                        distance: 200,
                        duration: 15,
                    },
                    grab: {
                        distance: 150,
                    },
                },
            },
            particles: {
                color: {
                    value: "#2cc171",
                },
                links: {
                    color: "#2cc171",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: isMobile ? 100 : 250,  // Adjust particle count based on screen size
                },
                opacity: {
                    value: 1.0,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [isMobile]  // Recalculate options when isMobile changes
    );

    return (
        <Particles
            id={props.id}
            init={particlesLoaded}
            options={options}
            className="absolute top-0 left-0 w-full h-full z-[-9999]"
        />
    );
});

export default ParticlesComponent;
