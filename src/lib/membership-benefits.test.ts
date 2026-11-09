import { describe, expect, test } from "bun:test";
import { membershipTransferPolicy } from "./membership-benefits";

describe("Cessione dell'abbonamento", () => {
  test("l'abbonamento può essere ceduto", () => {
    expect(membershipTransferPolicy.transferable).toBe(true);
  });
  test("il destinatario può essere chiunque", () => {
    expect(membershipTransferPolicy.recipient).toBe("anyone");
  });
});