import Link from 'next/link';

export default function HomeLayout({ children }: {children: React.ReactNode}) {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link href="/home">
                                Home
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="/home/createPoll">
                                Create Poll
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="/home/myPolls">
                                My Polls
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="/home/editProfile">
                                Edit Profile
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="/">
                                Log Out
                            </Link> 
                        </li>
                           
                    </ul>
                </nav>
            </header>

            {children}
        </>
    );
}
