import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    
   <div>
    <h2>this is home page</h2>
    <Link href={'/product'}>Product</Link>
   </div>
  )
}
