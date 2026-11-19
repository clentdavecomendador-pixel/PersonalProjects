import type { ReactNode } from "react";

type MainProps = {
    children: ReactNode;
};

export const Main = ({ children }: MainProps) => {
    return <main style={{ flex: 1, backgroundColor: '#111111' }}>{children}</main>;
};