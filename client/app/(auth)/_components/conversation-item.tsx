import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface IConversationProps {
  conversationId: string | number;
}

const ConversationItem = (props: IConversationProps) => {
  const { conversationId } = props;
  return (
    <Link
      href={`/messenger/${conversationId}`}
      className="flex w-full cursor-pointer items-center space-x-4 px-4 py-2 hover:bg-accent"
    >
      <Avatar>
        <AvatarImage src="/avatars/01.png" />
        <AvatarFallback>OM</AvatarFallback>
      </Avatar>
      <div className="flex-1 border-b py-1">
        <div className="flex items-center">
          <div className="text-sm font-medium leading-none">Sofia Davis</div>
          <div className="ml-auto text-xs text-foreground">11:06 AM</div>
        </div>
        <p className="text-xs text-muted-foreground">m@example.com</p>
      </div>
    </Link>
  );
};

export default ConversationItem;
