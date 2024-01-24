"use client";

import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import Navigation from "@/app/components/navigation";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ThemeProvider attribute="class">
            <div className="flex flex-col min-h-screen py-5 bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
                <Navigation />

                <main className="flex-1 container max-w-screen-xl mx-auto px-5 py-10">
                    {children}
                </main>

                <footer className="py-5 border-t">
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                        Copyright © 2024 isso. All rights reserved.
                    </div>
                </footer>
            </div>
        </ThemeProvider>
    );
};

export default Providers;