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
            },
        },
    },
    plugins: [],
};
