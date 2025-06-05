declare module 'screenshot-desktop' {
  interface ScreenshotOptions {
    format?: 'png' | 'jpg' | 'bmp' | 'tiff' | 'gif';
    screen?: string; // Display ID, e.g., 'display1', 'display2'
    filename?: string; // If specified, saves to file and returns filename as string
  }
  /**
   * Takes a screenshot of the desktop.
   * @param options Configuration options for the screenshot.
   * @returns A Promise that resolves with a Buffer of the image data, or a string (filename) if options.filename is provided.
   */
  function screenshot(options?: ScreenshotOptions): Promise<Buffer | string>;
  export = screenshot;
}
