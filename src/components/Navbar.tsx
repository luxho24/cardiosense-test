"use client"

import Link from "next/link"
import { signIn } from "next-auth/react"

function Navbar() {
    return (
        <nav className="bg-slate-900 flex items-center py-3 justify-between px-24 text-white">
            <Link href="/">
                <h1>NextGoogle</h1>
            </Link>

            <div className="flex gap-x-2 items-center">
                <Link href="/dashboard">
                    Dashboard
                </Link>
                <button onClick={() => signIn()} className="bg-sky-400 px-3 py-2 rounded">
                    Sign In
                </button>
            </div>
        </nav>
    )
}

export default Navbar;