import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ShowLoaderOptions {
  icon?: React.ReactNode;
  text?: React.ReactNode;
}

interface GlobalLoaderContextType {
  isLoading: boolean;
  icon: React.ReactNode;
  text: React.ReactNode;
  showLoader: (options?: ShowLoaderOptions) => void;
  hideLoader: () => void;
}

const GlobalLoaderContext = createContext<GlobalLoaderContextType | undefined>(
  undefined
);

export const useGlobalLoader = () => {
  const context = useContext(GlobalLoaderContext);
  if (!context) {
    throw new Error(
      "useGlobalLoader must be used within a GlobalLoaderProvider"
    );
  }
  return context;
};

interface GlobalLoaderProviderProps {
  children: ReactNode;
}

export const GlobalLoaderProvider = ({
  children,
}: GlobalLoaderProviderProps) => {
  const defaultIcon = <Loader2 className="h-6 w-6 animate-spin" />;
  const defaultText = <p className="text-lg font-medium">Loading...</p>;

  const [isLoading, setIsLoading] = useState(false);
  const [icon, setIcon] = useState<React.ReactNode>(defaultIcon);
  const [text, setText] = useState<React.ReactNode>(defaultText);

  const showLoader = (options?: ShowLoaderOptions) => {
    setIcon(options?.icon ?? defaultIcon);
    setText(options?.text ?? defaultText);
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  return (
    <GlobalLoaderContext.Provider
      value={{ isLoading, icon, text, showLoader, hideLoader }}
    >
      {children}
      <Dialog open={isLoading}>
        <DialogContent className="flex w-[300px] aspect-square flex-col items-center justify-center gap-6 p-6 text-center pointer-events-auto [&>button]:hidden">
          {icon}
          {text}
        </DialogContent>
      </Dialog>
    </GlobalLoaderContext.Provider>
  );
};
