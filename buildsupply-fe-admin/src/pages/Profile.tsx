import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/lib/dialog";
import { Input } from "@/components/lib/input";
import { Label } from "@/components/lib/label";
import { Button } from "@/components/lib/button";
import { useState } from "react";

const Profile = ({
  open = false,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  // State to manage form inputs
  const [name, setName] = useState("BuildSupply");
  const [username, setUsername] = useState("@buildsupply");

  return (
    <Dialog open={open} onOpenChange={setOpen} modal>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Add onChange handler
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Add onChange handler
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => setOpen(false)}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Profile;
