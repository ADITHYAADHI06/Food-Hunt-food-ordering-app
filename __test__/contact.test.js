import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom"


Discription("test cases for contact page", () => {

    test('Check Contact UI is Loaded or Not', () => {
        render(<Contact />)

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    //button check
    test('Check Button is Loaded or Not', () => {
        render(<Contact />)

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    //getByText
    test('Check Button is Loaded ort Not with text', () => {
        render(<Contact />)

        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });



    //placeholder
    test('Check input is Loaded or Not with text', () => {
        render(<Contact />)
        const input = screen.getByPlaceholderText("name");
        expect(input).toBeInTheDocument();
    });

    // 2 input box ==> multiple ==> use ALL
    test('Check 2 input is Loaded or Not with text', () => {
        render(<Contact />)

        const inputboxes = screen.getAllByRole("textbox");

        expect(inputboxes.length).toBe(2);

        // expect(inputboxes.length).not.toBe(3);
    });
})



