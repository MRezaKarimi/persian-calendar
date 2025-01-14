import { expect, it } from "vitest";
import { getDateRange } from "../lib/date-utils/date-range";

it("should return the correct date range for Farvardin 1403", () => {
  const year = 1403;
  const month = 1; // Farvardin

  const dateRange = getDateRange(year, month);

  expect(dateRange.length).toBe(35);
  expect(dateRange[0].toString()).toBe("1402 12 26");
  expect(dateRange[dateRange.length - 1].toString()).toBe("1403 1 31");
});

it("should return the correct date range for Ordibehesht 1403", () => {
  const year = 1403;
  const month = 2; // Ordibehesht

  const dateRange = getDateRange(year, month);

  expect(dateRange.length).toBe(35);
  expect(dateRange[0].toString()).toBe("1403 2 1");
  expect(dateRange[dateRange.length - 1].toString()).toBe("1403 3 4");
});

it("should return the correct date range for Khordad 1403", () => {
  const year = 1403;
  const month = 3; // Khordad

  const dateRange = getDateRange(year, month);

  expect(dateRange.length).toBe(35);
  expect(dateRange[0].toString()).toBe("1403 2 29");
  expect(dateRange[dateRange.length - 1].toString()).toBe("1403 4 1");
});

it("should return the correct date range for Tir 1403", () => {
  const year = 1403;
  const month = 4; // Tir

  const dateRange = getDateRange(year, month);

  expect(dateRange.length).toBe(42);
  expect(dateRange[0].toString()).toBe("1403 3 26");
  expect(dateRange[dateRange.length - 1].toString()).toBe("1403 5 5");
});

it("should return the correct date range for Mordad 1403", () => {
  const year = 1403;
  const month = 5; // Mordad

  const dateRange = getDateRange(year, month);

  expect(dateRange.length).toBe(35);
  expect(dateRange[0].toString()).toBe("1403 4 30");
  expect(dateRange[dateRange.length - 1].toString()).toBe("1403 6 2");
});

it("should return the correct date range for Shahrivar 1403", () => {
  const year = 1403;
  const month = 6; // Shahrivar

  const dateRange = getDateRange(year, month);

  expect(dateRange.length).toBe(42);
  expect(dateRange[0].toString()).toBe("1403 5 27");
  expect(dateRange[dateRange.length - 1].toString()).toBe("1403 7 6");
});

it("should return the correct date range for Mehr 1403", () => {
  const year = 1403;
  const month = 7; // Mehr

  const dateRange = getDateRange(year, month);

  expect(dateRange.length).toBe(35);
  expect(dateRange[0].toString()).toBe("1403 6 31");
  expect(dateRange[dateRange.length - 1].toString()).toBe("1403 8 4");
});

it("should return the correct date range for Aban 1403", () => {
  const year = 1403;
  const month = 8; // Aban

  const dateRange = getDateRange(year, month);

  expect(dateRange.length).toBe(35);
  expect(dateRange[0].toString()).toBe("1403 7 28");
  expect(dateRange[dateRange.length - 1].toString()).toBe("1403 9 2");
});

it("should return the correct date range for Azar 1403", () => {
  const year = 1403;
  const month = 9; // Azar

  const dateRange = getDateRange(year, month);

  expect(dateRange.length).toBe(35);
  expect(dateRange[0].toString()).toBe("1403 8 26");
  expect(dateRange[dateRange.length - 1].toString()).toBe("1403 9 30");
});

it("should return the correct date range for Dey 1403", () => {
  const year = 1403;
  const month = 10; // Dey

  const dateRange = getDateRange(year, month);

  expect(dateRange.length).toBe(35);
  expect(dateRange[0].toString()).toBe("1403 10 1");
  expect(dateRange[dateRange.length - 1].toString()).toBe("1403 11 5");
});

it("should return the correct date range for Bahman 1403", () => {
  const year = 1403;
  const month = 11; // Bahman

  const dateRange = getDateRange(year, month);

  expect(dateRange.length).toBe(35);
  expect(dateRange[0].toString()).toBe("1403 10 29");
  expect(dateRange[dateRange.length - 1].toString()).toBe("1403 12 3");
});

it("should return the correct date range for Esfand 1403", () => {
  const year = 1403;
  const month = 12; // Esfand

  const dateRange = getDateRange(year, month);

  expect(dateRange.length).toBe(35);
  expect(dateRange[0].toString()).toBe("1403 11 27");
  expect(dateRange[dateRange.length - 1].toString()).toBe("1404 1 1");
});
