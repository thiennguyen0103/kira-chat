import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { PropsWithChildren } from "react";
import Sidebar from "./_components/sidebar";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <ResizablePanelGroup direction="horizontal" className="w-full">
      <ResizablePanel defaultSize={20} minSize={20} maxSize={30}>
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>{children}</ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default AuthLayout;
