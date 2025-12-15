import { Badge } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { heartIcon } from "@/public/img";

export default function Favorite() {
  return (
        <div>
            <Link href="/cart" title="Your Cart">
                <Badge color="success" >
                    <Image src={heartIcon} alt="basket" width={30} height={30} className="z-30 size-5 xl:size-6" />
                </Badge>
            </Link>
        </div>
    );
};