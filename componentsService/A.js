import React from 'react';
import Link from 'next/link';

export default function A({href, onClick, children, className, style = undefined, ...props}) {
    return (
            <Link href={href || '#'}>
                <a onClick={onClick} className={className} style={style} {...props}>
                    {children}
                </a>
            </Link>
        );
}
