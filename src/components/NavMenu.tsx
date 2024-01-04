"use client"

import Link from 'next/link'
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE =
    "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

function AuthButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                {/* {session?.user?.name} <br /> */}
                <button className='w-24' onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <>
            <button onClick={() => signIn()}>Sign in</button>
        </>
    );
}

type Props = {}

const NavMenu = (props: Props) => {
    const pathname = usePathname();

    return (
        <div className='bg-black text-white h-52 ml-20 mr-20 p-6'>
            <div className='text-8xl'>CodeQuest</div>
            <div className='mt-8 flex justify-evenly'>
                <Link href={"/about"} className={pathname === "/about" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>About</Link>
                <Link href={"/activity"} className={pathname === "/activity" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                    Activity
                </Link>
                <Link href={"/problems"} className={pathname === "/problems" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                    Problems
                </Link>
                <Link href={"/competitions"} className={pathname === "/competitions" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                    Competitions
                </Link>
                <Link href={"/leaderboard"} className={pathname === "/leaderboard" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                    Leaderboard
                </Link>
                <Link href={"/login"} className={pathname === "/login" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
                    <AuthButton />
                </Link>
                <input type="text" placeholder="Search..." className="bg-gray-200 text-black px-2 py-1 ml-6 rounded-md" />
            </div>
        </div>
    )
}

export default NavMenu