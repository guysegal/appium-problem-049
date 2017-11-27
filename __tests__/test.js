  describe('foo', function () {
      before(function () {
          browser.launch();
      })

      it('bar', function () {
          browser.pause(5000);
          browser.waitForVisible("~my text")
          browser.pause(5000);          
          browser.waitForVisible("~my text")          
      });
  });

