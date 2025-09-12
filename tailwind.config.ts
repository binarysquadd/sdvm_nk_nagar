// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
                    "50%": { transform: "translateY(-20px) rotate(5deg)" },
                },
                "float-reverse": {
                    "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
                    "50%": { transform: "translateY(-15px) rotate(-3deg)" },
                },
                "float-slow": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                "bounce-subtle": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                "spin-slow": {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
                gradient: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
                    "50%": { opacity: "0.8", transform: "scale(1.05)" },
                },
                count: {
                    from: { opacity: "0", transform: "translateY(20px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },

                /* === Added from your <style jsx> === */
                gridMove: {
                    "0%": { transform: "translate(0, 0)" },
                    "100%": { transform: "translate(50px, 50px)" },
                },
                orbit: {
                    "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
                    "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
                },
                figure8: {
                    "0%": { transform: "translateX(0) translateY(0)" },
                    "25%": { transform: "translateX(60px) translateY(-40px)" },
                    "50%": { transform: "translateX(0) translateY(-80px)" },
                    "75%": { transform: "translateX(-60px) translateY(-40px)" },
                    "100%": { transform: "translateX(0) translateY(0)" },
                },
                "bounce-vertical": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "25%": { transform: "translateY(-50px)" },
                    "50%": { transform: "translateY(-100px)" },
                    "75%": { transform: "translateY(-50px)" },
                },
                wave: {
                    "0%, 100%": { transform: "translateX(0) translateY(0)" },
                    "25%": { transform: "translateX(40px) translateY(-20px)" },
                    "50%": { transform: "translateX(80px) translateY(0)" },
                    "75%": { transform: "translateX(40px) translateY(20px)" },
                },
                "spin-orbit": {
                    "0%": { transform: "rotate(0deg) translateX(80px) rotate(0deg)" },
                    "100%": { transform: "rotate(360deg) translateX(80px) rotate(-360deg)" },
                },
                twinkle: {
                    "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
                    "50%": { opacity: "1", transform: "scale(1.2)" },
                },
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                "float-reverse": "float-reverse 5s ease-in-out infinite",
                "float-slow": "float-slow 8s ease-in-out infinite",
                "bounce-subtle": "bounce-subtle 3s ease-in-out infinite",
                "spin-slow": "spin-slow 20s linear infinite",
                gradient: "gradient 3s ease infinite",
                "pulse-glow": "pulse-glow 4s ease-in-out infinite",
                count: "count 1s ease-out forwards",

                /* === Added animations === */
                gridMove: "gridMove 5s linear infinite",
                orbit: "orbit 10s linear infinite",
                figure8: "figure8 8s ease-in-out infinite",
                "bounce-vertical": "bounce-vertical 4s ease-in-out infinite",
                wave: "wave 6s ease-in-out infinite",
                "spin-orbit": "spin-orbit 12s linear infinite",
                twinkle: "twinkle 3s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};