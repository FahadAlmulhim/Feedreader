/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URL defined', function(){
                           for (let feed of allFeeds){
                           expect(feed.url).toBeDefined();
                           expect(feed.url.length).not.toBe(0);
                         }
                         })

                /* TODO: Write a test that loops through each feed
                 * in the allFeeds object and ensures it has a name defined
                 * and that the name is not empty.
                 */

                 it('Name is not empty', function(){
                            for (let feed of allFeeds){
                            expect(feed.name).toBeDefined();
                            expect(feed.name.length).not.toBe(0);
                          }
                          })
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
   describe('the menu', function() {
     let body = document.querySelector('body');
        //icon will be clicked
        let icon = document.querySelector('.menu-icon-link');

        it('hidden by default', function() {
            expect(body.classList).toContain("menu-hidden");
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu display and hide when clicked', function () {
          //both display and hide
          //source : https://www.w3schools.com/jsref/met_html_click.asp
        icon.click();
          expect(body.classList.contains('menu-hidden')).toBe(false);
  	       icon.click();
  	      expect(body.classList.contains('menu-hidden')).toBe(true);
  });
});
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         describe('Initial Entries', function() {

                   //feedEntry will be assigned to all feed and entry classes
                              //to find templete  created by feed and entry in app.js
                              let feedEntry = document.querySelectorAll('.feed,.entry');
                                 //source beforeEach:https://jasmine.github.io/api/3.5/global.html#beforeEach
                                 beforeEach(function (done) {
                                   //loadFeed function is in app.js
                        			        loadFeed(0, done);
                        		});

                            it('single .entry element within the .feed container', function () {

                			expect(feedEntry.length).toBeGreaterThan(0);
                		});


                 });


    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         describe('New Feed Selection', function() {
        let oldFeed;
          let newFeed;
          let feed;
          beforeEach(function (done) {
             //the loadFeed function  the content  changes
              loadFeed(0, function(){//first content
                 feed = document.querySelector(".feed").textContent;
                  oldFeed = feed;

                  loadFeed(1, function(){//second content
                     feed = document.querySelector(".feed").textContent;
                      newFeed= feed;

                    done();
                  });
              });
          });

          it('content  changes by loaded feed', function() {
                     expect(oldFeed).not.toBe(newFeed);
                 });
      });
}());
