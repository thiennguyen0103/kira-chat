import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Phone, Search, Video } from "lucide-react";

const MessengerDetail = () => {
  return (
    <div className="flex flex-col">
      <div className="border-b bg-card px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex space-x-2 py-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1 py-1 space-y-1">
              <div className="text-sm font-medium leading-none">
                Sofia Davis
              </div>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <EllipsisVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MessengerDetail;
