import AppWrapper from "@/components/wrapper/app-wrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <AppWrapper>
      <div className="flex justify-center items-center gap-2 h-full w-full p-4">
        <Card className="max-w-5xl w-full p-6">
          <div className="flex justify-between gap-2">
            <h2 className="text-lg font-semibold">
              Select your language / Sélectionnez votre langue <br></br>
              <span className="text-xs font-normal">
                Version 1 (May 01 2025)
              </span>
            </h2>
            <Select defaultValue="en">
              <SelectTrigger className="w-[300px]">
                <SelectValue defaultValue={"en"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English/Anglais</SelectItem>
                <SelectItem value="fr">French/Français</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <hr />
          <div className="space-y-3 text-sm">
            <p>
              HOLOS-EU - A Tool to estimate and reduce greenhouse gas emissions
              from farms.
            </p>
            <p>
              To be kept informed about future versions, please send your
              contact information (including email address) to
              ibrahim.khalil@ucd.ie
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Disclaimer</h2>
            <div className="border border-foreground/20 p-3 max-h-[200px] overflow-y-scroll rounded">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas aut qui dolorem aperiam facere, consequuntur dolorum
                praesentium temporibus harum reprehenderit, natus unde ducimus
                exercitationem impedit aliquam nihil neque sequi itaque? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut
                qui dolorem aperiam facere, consequuntur dolorum praesentium
                temporibus harum reprehenderit, natus unde ducimus
                exercitationem impedit aliquam nihil neque sequi itaque? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut
                qui dolorem aperiam facere, consequuntur dolorum praesentium
                temporibus harum reprehenderit, natus unde ducimus
                exercitationem impedit aliquam nihil neque sequi itaque? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut
                qui dolorem aperiam facere, consequuntur dolorum praesentium
                temporibus harum reprehenderit, natus unde ducimus
                exercitationem impedit aliquam nihil neque sequi itaque? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut
                qui dolorem aperiam facere, consequuntur dolorum praesentium
                temporibus harum reprehenderit, natus unde ducimus
                exercitationem impedit aliquam nihil neque sequi itaque? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut
                qui dolorem aperiam facere, consequuntur dolorum praesentium
                temporibus harum reprehenderit, natus unde ducimus
                exercitationem impedit aliquam nihil neque sequi itaque?
                exercitationem impedit aliquam nihil neque sequi itaque? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut
                qui dolorem aperiam facere, consequuntur dolorum praesentium
                temporibus harum reprehenderit, natus unde ducimus
                exercitationem impedit aliquam nihil neque sequi itaque? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut
                qui dolorem aperiam facere, consequuntur dolorum praesentium
                temporibus harum reprehenderit, natus unde ducimus
                exercitationem impedit aliquam nihil neque sequi itaque? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptas aut
                qui dolorem aperiam facere, consequuntur dolorum praesentium
                temporibus harum reprehenderit, natus unde ducimus
                exercitationem impedit aliquam nihil neque sequi itaque?
              </p>
            </div>
          </div>

          <Button className="mx-auto -mt-2 w-[30%]">OK</Button>
        </Card>
      </div>
    </AppWrapper>
  );
}
