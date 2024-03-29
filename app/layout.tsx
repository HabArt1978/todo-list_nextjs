import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Список дел',
	description: 'Учебный проект Next.js, tailwindcss, daisyUi',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}): JSX.Element {
	return (
		<html lang="ru">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
