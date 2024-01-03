import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import AddTask from "@/components/AddTask";
import TodoList from "@/components/Page";
import { Search } from "@/components/Search";

export function App() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] rounded-lg border"
    >
      <ResizablePanel defaultSize={16}>
        <div className="flex h-full flex-col items-center justify-center p-6">
          <AddTask />
          <Search /> {/* TODO: make animation faster*/}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full justify-center p-6">
          <TodoList />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
