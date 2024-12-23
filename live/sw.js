/*
(c) 2024 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const urlSelf = new URL(self.location);

function self_install(e) {
  console.log("sw.js: Start Installing");
  console.log("sw.js: End Installing");
}

function self_fetch(e) {
  console.log("sw.js: Start Handling Fetch");
  async function sendResponse(request) {
    if (request.url = new URL(urlSelf, "./test").toString()) {
      return Response.redirect("https://www.google.com/");
    } else {
      return await fetch(e.request);
    }
  }
  e.respondWith(sendResponse(e.request));
  console.log("sw.js: End Handling Fetch");
}

self.addEventListener("install", self_install);
self.addEventListener("fetch", self_fetch);
