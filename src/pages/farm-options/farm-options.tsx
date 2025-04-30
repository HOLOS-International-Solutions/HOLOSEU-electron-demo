import { Button } from "@/components/ui/button";
import AppWrapper from "@/components/wrapper/app-wrapper";
import { FolderOpen, Import, Plus } from "lucide-react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router";

export default function FarmOptionsPage() {
  const navigate = useNavigate();
  return (
    <AppWrapper>
      <div className="flex flex-col justify-center items-center h-full w-full p-4">
        <div className="flex-1 flex flex-col items-center justify-center max-w-4xl">
          <img src={"/holos-eu-logo.png"} className="w-36 h-36 mb-8" />
          <h2 className="font-bold text-muted-foreground text-2xl text-center">
            Would you like to open an existing farm or create a new one?
          </h2>

          <div className="flex gap-4 justify-center mt-5">
            <Button
              size={"lg"}
              variant={"primary"}
              className="cursor-pointer  w-56"
            >
              <Plus /> Create New Farm
            </Button>
            <Button
              size={"lg"}
              variant={"primary"}
              className="cursor-pointer  w-56"
            >
              <FolderOpen />
              Open Existing Farm
            </Button>
          </div>

          <hr className="my-10 w-full" />

          <h2 className="font-bold text-muted-foreground text-lg text-center">
            Import Existing Data
          </h2>
          <div className="flex justify-center mt-4">
            <Button
              size={"lg"}
              variant={"primary"}
              className="cursor-pointer w-56"
            >
              <Import />
              Import
            </Button>
          </div>
        </div>
        <hr className="w-full my-4" />
        <Button
          size={"lg"}
          className="cursor-pointer"
          onClick={() => navigate("/")}
        >
          <RiArrowGoBackFill />
          Back
        </Button>
      </div>
    </AppWrapper>
  );
}
