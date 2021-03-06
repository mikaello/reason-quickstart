open Jest;

describe("Expect", () => {
  open Expect;

  test("Addition", () =>
    expect(3 + 4) |> toBe(7)
  );

  test("Subtraction", () =>
    expect(5 - 66) |> toBe(-61)
  );

  test("Concatenation", () =>
    expect("ab" ++ "cd") |> toBe("abcd")
  );

  test("Project Euler #1", () =>
    expect(Euler1.compute()) |> toBe(233168)
  );
});
