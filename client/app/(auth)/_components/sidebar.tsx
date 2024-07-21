import SearchInput from "@/components/search-input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EllipsisVertical, MessageSquare } from "lucide-react";
import ConversationList from "./conversation-list";

const Sidebar = () => {
  return (
    <div className="flex h-screen flex-col">
      <div className="border-b bg-card pl-4 pr-1">
        <div className="flex h-16 items-center justify-between">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <EllipsisVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-background">
        <div className="bg-background/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <SearchInput />
        </div>
        <ScrollArea className="h-[calc(100vh-120px)]">
          <ConversationList />
        </ScrollArea>
      </div>
    </div>
  );
};

export default Sidebar;
