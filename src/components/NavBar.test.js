import { render, screen, fireEvent } from '@testing-library/react';

import { uploadImage } from '../api/images';

import NavBar from "./NavBar";


jest.mock("../api/images", () => {
    return {
        __esModule: true,
        uploadImage: jest.fn(),
    }
});


test("file upload button is in the doc", () => {
    render( <NavBar /> );
    const fileInput = screen.getByLabelText(/Upload/i);

    expect(fileInput).toBeInTheDocument();

})

// test("when user changes the file input, uploadImage function is called", () => {
//     render( <NavBar /> );
//     const fileInput = screen.getByLabelText(/Upload/i);

//     fireEvent.change(fileInput, {
//         target: {
//             files: [ new File([new ArrayBuffer(1)], 'file.jpg') ],
//         },
//     });

//     expect(uploadImage).toBeCalled();
// });

// test("when user presses signs out, signOut function is called", () => {
//     render( <NavBar /> );
//     const 

// })
