import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateFarm } from "@/hooks/apis/farms/useCreateFarm";

import { useGlobalLoader } from "@/providers/globalLoader";
import { FarmCreateSchema } from "@/schemas/farm";
import { FarmCreateType } from "@/types/farm";
import extractZodErrorMessage from "@/utils/errorHandlers";
import { TFunction } from "i18next";
import { Loader2, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ZodError } from "zod";

export default function FarmCreationForm({ t }: { t: TFunction }) {
  const { register, handleSubmit, reset } = useForm<FarmCreateType>();
  const { showLoader, hideLoader } = useGlobalLoader();
  const { mutate: createFarm } = useCreateFarm();

  const submitFarmCreation = async (data: FarmCreateType) => {
    try {
      const parsedData = await FarmCreateSchema.parseAsync(data);

      showLoader({
        icon: <Loader2 className="animate-spin text-primary" size={40} />,
        text: (
          <p className="text-xl font-bold text-primary">
            {t("creatingFarmLoading")}
          </p>
        ),
      });

      const response = await createFarm(parsedData);

      console.log(response);
      reset();
      toast.success(t("farmCreatedSuccess"));
    } catch (error) {
      if (error instanceof ZodError) {
        const message = extractZodErrorMessage(error);
        toast.error(t(message));
      } else {
        toast.error(t("common:unknownError"));
      }
    } finally {
      hideLoader();
    }
  };

  return (
    <form
      className="flex flex-col gap-4 justify-center mt-8 w-full"
      onSubmit={handleSubmit(submitFarmCreation)}
    >
      <hr />
      <Input
        placeholder={t("inputName")}
        className="w-full"
        {...register("name")}
      />

      <Input
        placeholder={t("inputComment")}
        className="w-full"
        {...register("comment")}
      />
      <hr />
      <Button size={"lg"} className="w-full" type="submit">
        <Plus /> {t("createFarmButton")}
      </Button>
      <hr />
    </form>
  );
}
