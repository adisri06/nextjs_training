import Link from "next/link";
export default function ShoppingLayout({ children }) {
    return (
                <div>
                <h1>Shopping Categories</h1>
                <nav>
                    <Link href="/shopping/home-appliances"> Home Appliances </Link>
                    <Link href="/shopping/beauty-products"> Beauty Products </Link>
                    <Link href="/shopping/outdoor-gear"> Outdoor Gear </Link>
                </nav>
                {children}
            </div>
    );
}