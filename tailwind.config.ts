import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/tw-elements/js/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				'ibm-plex-sans': [
					'IBM Plex Sans',
					'sans-serif'
				],
				'bebas-neue': [
					'var(--bebas-neue)'
				]
			},
			colors: {
				primaryColor: '#14b8a6',
				yellowColor: '#FEB60D',
				purpleColor: '#9771FF',
				irisBlueColor: '#01B5C5',
				headingColor: '#181A1E',
				textColor: '#4E545F',
				background: 'hsl(var(--background))',
				secondaryBackground: '#0f2934',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				primary: {
					DEFAULT: '#0d212c',
					admin: '#25388C'
				},
				green: {
					'100': '#ECFDF3',
					'400': '#4C7B62',
					'500': '#2CC171',
					'800': '#027A48',
					DEFAULT: '#027A48'
				},
				red: {
					'400': '#F46F70',
					'500': '#E27233',
					'800': '#EF3A4B',
					DEFAULT: '#EF3A4B'
				},
				blue: {
					'100': '#0089F1'
				},
				light: {
					'100': '#D6E0FF',
					'200': '#EED1AC',
					'300': '#F8F8FF',
					'400': '#EDF1F1',
					'500': '#8D8D8D',
					'600': '#F9FAFB',
					'700': '#E2E8F0',
					'800': '#F8FAFC'
				},
				dark: {
					'100': '#16191E',
					'200': '#3A354E',
					'300': '#232839',
					'400': '#1E293B',
					'500': '#0F172A',
					'600': '#333C5C',
					'700': '#464F6F',
					'800': '#1E2230'
				},
				gray: {
					'100': '#CBD5E1'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			screens: {
				xs: '480px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				pattern: 'url(/icons/animatedLines.svg)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-next': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.02)'
					}
				},
				'pulse-next-next': {
					'0%, 100%': {
						transform: 'scale(0.95)'
					},
					'50%': {
						transform: 'scale(0.97)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.5s ease-out',
				'pulse-next': 'pulse-next 2s infinite ease-in-out',
				'pulse-next-next': 'pulse-next-next 2s infinite ease-in-out'
			},
			boxShadow: {
				panelShadow: 'rgba(17,12,46,0.15) 0px 48px 100px 0px;'
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("tw-elements/plugin.cjs")],
} satisfies Config;