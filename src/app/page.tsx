import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";

export default function Home() {
  return (
   <div className="m-10">
    <SignInButton>
      <Button>login</Button>
    </SignInButton>
   </div>
  );
}
