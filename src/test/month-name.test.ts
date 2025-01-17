import { expect, it, describe } from "vitest";
import { getMonthName } from "../lib/date-utils/month-name";

describe("getMonthName", () => {
  it("should return correct Persian month names", () => {
    expect(getMonthName(1)).toBe("فروردین");
    expect(getMonthName(2)).toBe("اردیبهشت");
    expect(getMonthName(3)).toBe("خرداد");
    expect(getMonthName(4)).toBe("تیر");
    expect(getMonthName(5)).toBe("مرداد");
    expect(getMonthName(6)).toBe("شهریور");
    expect(getMonthName(7)).toBe("مهر");
    expect(getMonthName(8)).toBe("آبان");
    expect(getMonthName(9)).toBe("آذر");
    expect(getMonthName(10)).toBe("دی");
    expect(getMonthName(11)).toBe("بهمن");
    expect(getMonthName(12)).toBe("اسفند");
  });

  it("should return undefined for invalid month numbers", () => {
    expect(getMonthName(0)).toBeUndefined();
    expect(getMonthName(13)).toBeUndefined();
  });
});
