// this is just a quick dirty way to get to use
// an Attack On Titan kind of font
export function loadFonts() {
  console.log("here");
  const link1 = document.createElement("link");
  link1.setAttribute("rel", "preconnect");
  link1.setAttribute("href", "https://fonts.googleapis.com");
  document.head.appendChild(link1);

  const link2 = document.createElement("link");
  link2.setAttribute("rel", "preconnect");
  link2.setAttribute("href", "https://fonts.gstatic.com");
  link2.setAttribute("crossorigin", "");
  document.head.appendChild(link2);

  const link3 = document.createElement("link");
  link3.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap",
  );
  link3.setAttribute("rel", "stylesheet");
  document.head.appendChild(link3);
}
