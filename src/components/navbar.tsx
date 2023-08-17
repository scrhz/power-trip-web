import Link from 'next/link'

export default () => {
    return (
        <nav>
            <div>
                <h1>Power Trip Productions</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/audio">Audio Services</Link>
            <Link href="/products">Equipment Hire</Link>
        </nav>
    )
}
