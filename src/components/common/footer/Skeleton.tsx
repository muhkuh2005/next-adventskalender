import { clsx } from "clsx";
import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function FooterSkeleton() {
    return (
        <footer className={clsx("footer")}>
            <p>Latest Commit: <Skeleton className="skeleton" width={70} height={16} /></p>
            <p>Date: <Skeleton className="skeleton" width={140} height={16} /></p>
        </footer>
    );
}