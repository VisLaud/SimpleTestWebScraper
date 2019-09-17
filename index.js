const puppeteer = require("puppeteer");
(async function main() {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    );
    await page.goto("https://pacificairleisure.com");
    await page
      .waitForSelector(
        "#app > div > div.page-content-wrapper__main > div:nth-child(1) > div > div.sub-menu > div:nth-child(2)",
        1
      )
      .then(() => console.log("success"));
    //await page.waitFor(".react-slideshow-fade-images-wrap", 500);

    const flight = await Promise.all([
      await page.click(".trip-type-selector-new"),
      await page.type("#react-select-2-input", "SFO"),
      await page.keyboard.press("Enter"),
      await page.type("#react-select-3-input", "MNL"),
      await page.keyboard.press("Enter"),
      //await page.click(".DayPickerInput"),
      await page.click(
        "#app > div > div.page-content-wrapper__main > div:nth-child(1) > div > section > div > div.search-and-destination__wrapper > div.search-destination.s-d__grid-container > div.flex.border-bottom-grey-separator > div.s-d__date-wrapper.flex > div > div > div > input "
      )
      //await page.click(".traveler-class-selector")
      //document.querySelector().s-d__date-departure input').click()
      //await page.click("#cabin-select-btn cabin-select-btn--selected")
    ]);
  } catch (e) {
    console.log("our error", e);
  }
})();
