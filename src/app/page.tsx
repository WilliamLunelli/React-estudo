import { EmojiRating } from "@/Components/Emoji-Rating";

export default function Page() {  
  return(
    <div className="w-screen h-screen flex justify-center items-center">
      <EmojiRating rate={4.2}/>
    </div>
  );

}