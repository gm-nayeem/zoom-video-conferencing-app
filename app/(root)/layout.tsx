import { ReactNode } from "react";

import StreamVideoProvider from "@/providers/stream-client-provider";

const DashboardLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default DashboardLayout;
