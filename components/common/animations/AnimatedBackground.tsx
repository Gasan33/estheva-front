"use client";
import { motion } from "framer-motion";

const AnimatedBackground: React.FC = () => {
    const lineVariants = {
        animate: {
            y: ["-100%", "100%"],
            transition: {
                duration: 5,
                repeat: Infinity,
                repeatType: "loop" as const,
                ease: "linear",
            },
        },
    };

    return (
        <div className="absolute inset-0 overflow-hidden bg-transparent">
            {/* Adjust the height for smaller screens */}
            <div className="absolute inset-0 top-0 h-[100%] lg:h-full w-full">
                {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute h-[150%] md:w-1 w-[1%] bg-teal-100 opacity-50`}
                        style={{
                            left: `${i * 10}%`,
                            top: `${i * -50}px`,
                        }}
                        variants={lineVariants}
                        animate="animate"
                    />
                ))}
            </div>
        </div>
    );
};

export default AnimatedBackground;
