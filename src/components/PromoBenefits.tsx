import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { membershipBenefits, membershipTransferPolicy } from "@/lib/membership-benefits";

export function PromoBenefits() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="mt-5 border-t border-brand-red/30 pt-4">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="h-11 w-full justify-between border-brand-red/50 bg-transparent px-4 font-bold uppercase text-foreground hover:bg-brand-red/10">
          Scopri i vantaggi
          <ChevronDown aria-hidden="true" className={`transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="grid gap-3 pt-4 text-sm leading-relaxed sm:grid-cols-2">
          {membershipBenefits.map((benefit) => (
            <li key={benefit} className="flex min-w-0 items-start gap-2">
              <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
              <span>{benefit}</span>
            </li>
          ))}
          {membershipTransferPolicy.transferable && membershipTransferPolicy.recipient === "anyone" && (
            <li className="flex min-w-0 items-start gap-2">
              <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
              <span>Puoi cedere il tuo abbonamento a chi vuoi se non puoi o non vuoi più frequentare</span>
            </li>
          )}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}