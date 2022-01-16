import { render, screen, fireEvent } from '@testing-library/react';


jest.mock("../api/uploadImage", () => {
    return {
        __esModule: true,
        default: jest.fn(),
    }
});


test("file upload button is in the doc", () => {
    render( <NavBar /> );
    const fileInput = screen.getByLabelText(/Upload/i);

    expect(fileInput).toBeInTheDocument();

})

test("when user changes the file input, uploadImage function is called once", async () => {
    render( <NavBar /> );
    const fileInput = screen.getByLabelText(/Upload/i);

    fireEvent.change(fileInput, {
        target: {
            files: [ new File([new ArrayBuffer(1)], 'file.jpg') ],
        },
    });

    expect(uploadImage).toBeCalled();
});
