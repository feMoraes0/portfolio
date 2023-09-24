import { screen, render } from "@testing-library/react";
import Tag from "@/app/components/Tag";
import "@testing-library/jest-dom";

describe('Given the tag element rendered', () => {
  beforeEach(() => {
    render(<Tag text="any content" />);
  });

  describe("When the element is get", () => {
    let strongByText: HTMLElement;

    beforeEach(() => {
      strongByText = screen.getByText("any content");
    });

    it("Then should be in the document", () => {
      expect(strongByText).toBeInTheDocument();
    });

    it("Then should have class defined as expected", () => {
      expect(strongByText.className).toBe("text-base px-10 py-3 shadow-md rounded-xl mb-10 bg-cyan-600");
    });
  });
});
