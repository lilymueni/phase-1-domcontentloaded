// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("This is really cool!");
  
    // Get the <p> element
    const paragraphElement = document.querySelector('p');
    
    // Change the text content
    paragraphElement.textContent = "This is really cool!";
  });
  
  // Test case
  describe("index.js", () => {
    it('should change the text on the page when DOM content has loaded', function () {
      // Check initial text content
      expect(document.querySelector('p').textContent).to.equal("JavaScript is so cool. It lets me add text to my page programmatically.");
  
      // Dispatch DOMContentLoaded event
      const event = document.createEvent('Event');
      event.initEvent('DOMContentLoaded', true, true);
      window.document.dispatchEvent(event);
  
      // Check updated text content
      expect(document.querySelector('p').textContent).to.equal("This is really cool!");
    })
  })