import Link from 'next/link';

export default function HomeLayout({ children }: {children: React.ReactNode}) {
    return (
        <>
            <aside>
                <Link href="/home">
                    Home
                </Link>

                <Link href="/home/createPoll">
                    Create Poll
                </Link>

                <Link href="/home/myPolls">
                    My Polls
                </Link>

                <Link href="/home/editProfile">
                    Edit Profile
                </Link>

                <Link href="/">
                    Log Out
                </Link>       
            </aside>

            {children}
        </>
    );
}
