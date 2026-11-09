import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { membershipTransferPolicy } from "./membership-benefits";

describe("Cessione dell'abbonamento", () => {
  test("l'abbonamento può essere ceduto", () => {
    assert.equal(membershipTransferPolicy.transferable, true);
  });
  test("il destinatario può essere chiunque", () => {
    assert.equal(membershipTransferPolicy.recipient, "anyone");
  });
});