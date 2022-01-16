/**
 * @jest-environment node
 */

import { render, screen } from '@testing-library/react';

import ImageList from "./ImageList";

test("list of images exist", async () => {
    render( <ImageList /> );

    const imgElement = await screen.findByRole("img");

    expect(imgElement).toBeInTheDocument();

})