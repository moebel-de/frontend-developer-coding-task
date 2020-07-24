import { getMQ, BreakPoints, breakPoints } from "./device";

test("Returns desktop media query value", () => {
  const laptopBp = BreakPoints.laptop;
  const mq = getMQ(laptopBp);

  expect(mq).toEqual(`(min-width: ${breakPoints[laptopBp]})`);
});
