const { openBrowser, goto, into, dragAndDrop, click, text, closeBrowser } = require('taiko')
    , expect = require('chai').expect;
(async () => {
    try {
        await openBrowser();
        await goto('http://localhost:3000/drag_and_drop/oldschool');
        await dragAndDrop('1', into('2'));
        await click('Display the order');
        expect(await text('0213').exists()).to.be.true;
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();
